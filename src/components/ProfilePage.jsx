import React from "react";
import Layout from "./Layout";

const ProfilePage = () => (
  <div>
    <Layout />
    <div>
      <h1>Профиль пользователя</h1>
    </div>
    <div>
      <h4>Пользователь: {localStorage.getItem("login")}</h4>
    </div>
    <div>
      <h4> Пароль: {localStorage.getItem("password")}</h4>
    </div>
    <div>Страница пользователя</div>
  </div>
);

export default ProfilePage;
