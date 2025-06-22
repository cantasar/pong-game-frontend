import { getFriends, Friend, getMe, User, logout } from '../../services';
import { BaseComponent } from '../base.component';

export class SidebarComponent extends BaseComponent {
  private profileBtn: HTMLElement | null = null;
  private friendsBtn: HTMLElement | null = null;
  private logoutBtn: HTMLElement | null = null;
  private cardContent: HTMLElement | null = null;
  private username: HTMLElement | null = null;

  init() {
    this.profileBtn = document.getElementById('profileBtn');
    this.friendsBtn = document.getElementById('friendsBtn');
    this.logoutBtn = document.getElementById('logoutBtn');
    this.cardContent = document.getElementById('cardContent');
    this.username = document.getElementById('username');

    this.showUserProfile();
    this.setupEventListeners();
    this.isInitialized = true;
  }

  private setupEventListeners() {
    this.profileBtn?.addEventListener('click', () => {
      this.showProfile();
    });

    this.friendsBtn?.addEventListener('click', async () => {
      await this.showFriends();
    });

    this.logoutBtn?.addEventListener('click', async () => {
      await logout();
    });
  }

  private showProfile() {
    if (this.cardContent) {
      this.cardContent.innerHTML = '<p class="text-gray-600 text-sm">Welcome to your profile.</p>';
    }
  }

  private async showFriends() {
    if (!this.cardContent) return;

    this.cardContent.innerHTML = '<p class="text-sm text-gray-500">Loading friends...</p>';
    
    try {
      const friends = await getFriends();

      if (!friends || friends.length === 0) {
        this.cardContent.innerHTML = '<p class="text-sm text-gray-500">No friends found.</p>';
        return;
      }

      const ul = document.createElement('ul');
      ul.className = 'text-sm text-gray-700 space-y-1';

      friends.forEach((friend: Friend) => {
        const li = document.createElement('li');
        li.textContent = friend.username;
        ul.appendChild(li);
      });

      this.cardContent.innerHTML = '';
      this.cardContent.appendChild(ul);
    } catch (err) {
      this.cardContent.innerHTML = '<p class="text-sm text-red-500">Error loading friends.</p>';
    }
  }

  private async showUserProfile() {
    if (!this.cardContent) return;

    try {
      const user: User = await getMe();
      console.log('User profile:', user);
      if (this.username) {
        this.username.innerHTML = user.username || 'Unknown User';
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      if (this.username) {
        this.username.innerHTML = 'Error loading user';
      }
    }
  }

  destroy() {
    this.profileBtn = null;
    this.friendsBtn = null;
    this.logoutBtn = null;
    this.cardContent = null;
  }
}
