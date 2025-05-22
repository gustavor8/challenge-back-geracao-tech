class UserModel {
  lista = [];

  authenticate(login, password) {
    const index = UserModel.lista.findIndex(
      (item) => item.login == login && item.password == password
    );
    return UserModel.lista[index];
  }
}
