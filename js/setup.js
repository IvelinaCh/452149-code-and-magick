'use strict';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
var wizardsCount = 4;
var setupSimilar = document.querySelector('.setup-similar');
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var getRandomFromArray = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};


var createClone = function (array) {
  for (var i = 0; i < wizardsCount; i++) {
    array.push({
      name : getRandomFromArray(firstNames) + '\n' + getRandomFromArray(lastNames),
      coatColor : getRandomFromArray(coatColors),
      eyesColor : getRandomFromArray(eyesColors)
    });
  }
  return array;
};

var renderWizard = function (wizardArr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardArr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardArr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardArr.eyesColor;

  return wizardElement;
}

wizards = createClone(wizards);
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarList.appendChild(fragment);
