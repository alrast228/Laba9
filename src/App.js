import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Parent from './Parent';
import CounterParent from './CounterParent';
import FormParent from './FormParent';
import CheckboxParent from './CheckboxParent';
import TodoApp from './TodoApp';
import ToggleParent from './ToggleParent';
import FullNameApp from './FullNameApp';
import SumApp from './SumApp';
import ParentComponent from './ParentComponent';
import ParentTemperatureComponent from './ParentTemperatureComponent';
import ParentCaloriesCalculator from './ParentCaloriesCalculator';

function App() {
  const [show, setShow]=useState(false);
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <h2>Лабораторная работа №9.</h2>
      <p>1. Реализуйте компонент Parent с состоянием color, и дочерний компонент ColorPicker, который изменяет это состояние по выбору цвета из списка.</p>
      <Parent />
      <p>2. Создайте компонент CounterParent, в котором два дочерних компонента могут увеличивать и уменьшать общий счётчик.</p>
      <CounterParent />
      <p>3. Сделайте компонент FormParent, который управляет состоянием формы и передаёт её данные дочерним компонентам для отображения.</p>
      <FormParent />
      <p>4. Создайте компонент с чекбоксами. Если хотя бы один из них выбран, родительский компонент должен отображать сообщение "Выбрано".</p>
      <CheckboxParent />
      <p>5. Реализуйте компонент TodoApp с полем ввода для добавления задач и компонентом TodoList, который отображает список задач.</p>
      <TodoApp />
      <p>6. Сделайте компонент ToggleParent, в котором дочерний компонент переключает состояние isVisible родителя и отображает текст в зависимости от этого состояния.</p>
      <ToggleParent />
      <p>7. Создайте два поля ввода: одно для имени, другое для фамилии. Родительский компонент должен отображать полное имя.</p>
      <FullNameApp />
      <p>8. Реализуйте компонент, который принимает два числа от дочернего компонента и отображает их сумму.</p>
      <SumApp />
      <p>9. Сделайте компонент, который отображает выбранный вариант из списка радиокнопок в родительском компоненте.</p>
      <ParentComponent />
      <p>10. Создайте компонент TemperatureConverter, в котором одно поле ввода отображает температуру в Цельсиях, а другое — в Фаренгейтах. А в родительском их оба.</p>
      <ParentTemperatureComponent />
      <h3>Индивидуальное задание</h3>
      <p>4. Калькулятор калорий:
Создайте приложение, где есть несколько дочерних компонентов для выбора продуктов питания. Каждый продукт имеет определённую калорийность. Родительский компонент отображает общее количество калорий, выбранных пользователем продуктов.</p>
      <ParentCaloriesCalculator />
      <Footer />

    </div>
  );
}

export default App;
