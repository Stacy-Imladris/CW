function validate(username, password){
  let database = new Database();
  return password.includes('||') ? 'Wrong username or password!' : database.login(username, password);
}