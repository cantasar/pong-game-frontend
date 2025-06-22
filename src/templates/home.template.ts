export const sidebarTemplate = `
  <div class="w-64 bg-white shadow-lg p-4 flex flex-col">
    <div class="text-center mb-4">
      <div class="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2"></div>
      <h2 class="text-lg font-semibold" id="username">Username</h2>
    </div>
    <div class="flex justify-around">
      <button id="profileBtn" class="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Profile</button>
      <button id="friendsBtn" class="px-2 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Friends</button>
      <button id="logoutBtn" class="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Logout</button>
    </div>
    <div id="cardContent" class="mt-4">
      <p class="text-gray-600 text-sm">Welcome to your profile.</p>
    </div>
  </div>
`;

export const mainContentTemplate = `
  <div class="flex-1 bg-gray-100 p-8">
    <h1 class="text-2xl font-bold text-gray-800">Home Page Content</h1>
  </div>
`;

export const homeTemplate = `
  <div class="h-screen flex">
    <!-- Left Panel: Profile Card -->
    ${sidebarTemplate}
    <!-- Right content -->
    ${mainContentTemplate}
  </div>
`;
