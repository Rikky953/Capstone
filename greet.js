function greetUser() {
    const visited = document.cookie.includes('visited=true');
    if (visited) {
      alert('Welcome back to Western Conference Stars!');
    } else {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 7);
      document.cookie = `visited=true; expires=${expiry.toUTCString()}; path=/`;
      alert('Welcome to Western Conference Stars!');
    }
  }
  greetUser(); 
  