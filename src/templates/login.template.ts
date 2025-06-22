export const loginTemplate = `
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
      <form id="loginForm" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            id="username" 
            type="text" 
            placeholder="Enter your username"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            id="password" 
            type="password" 
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <button 
          type="submit"
          id="loginBtn"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          Login
        </button>
      </form>
      <div id="errorMessage" class="mt-4 text-red-600 text-center hidden"></div>
    </div>
  </div>
`;
