function validateUsr(username) {
    const res = /^[a-z0-9_]+$/.test(username);
    if (res && username.length >= 4 && username.length <= 16) {
      return true;
    } else {
      return false;
    }
}