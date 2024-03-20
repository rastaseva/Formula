import { Component, OnInit } from '@angular/core';

export interface Operator {
  operator: String;
  label: String;
  formula?: () => {}
}

export interface OperatorsList {
  id: Number;
  valuesArr: Operator[]
}

export interface PreviousValue {
  id: Number;
  value: String;
}


@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.scss']
})
export class CentreComponent implements OnInit {
  title = 'Formula';

  input: HTMLInputElement;
  focusPosition: number;
  _value: any;
  _operator: string;
  _boolOperator: string;
  _logicalOperator: string;
  _constOperator: string;
  prevOperator: PreviousValue;

  operatorsValues = {
    math: {
      value: this.operator,
      id: 0
    },
    bool: {
      value: this.boolOperator,
      id: 1
    },
    dif: {
      value: this.constOperator,
      id: 2
    },
    log: {
      value: this.logicalOperator,
      id: 3
    },
  };


  operatorsSelectList: OperatorsList = {
    id: 0,
    valuesArr: [
      {
        operator: '+',
        label: 'Оператор сложения'
      },
      {
        operator: '-',
        label: 'Оператор вычитания'
      },
      {
        operator: '*',
        label: 'Оператор умножения'
      },
      {
        operator: '/',
        label: 'Оператор деления'
      },
      {
        operator: '%',
        label: 'Оператор остатка по модулю'
      }, {
        operator: '^',
        label: 'Оператор возведения в степень'
      }
    ]
  };

  boolOperatorsSelectList: OperatorsList = {
    id: 1,
    valuesArr: [
      {
        operator: '=',
        label: 'Равно'
      },
      {
        operator: '!=',
        label: 'Не равно'
      },
      {
        operator: '<>',
        label: 'Не равно'
      },
      {
        operator: '<',
        label: 'Меньше, чем'
      },
      {
        operator: '<=',
        label: 'Меньше или равно'
      }, {
        operator: '>',
        label: 'Больше, чем'
      },
      {
        operator: '>=',
        label: 'Больше или равно'
      },
      {
        operator: '&&',
        label: 'Логическое "И"'
      },
      {
        operator: '||',
        label: 'Логическое "ИЛИ"'
      }
    ]
  };

  logicalOperatorsSelectList: OperatorsList = {
    id: 2,
    valuesArr: [
      {
        operator: 'NOT(выражение)',
        label: 'Логическое отрицание, 1 (означает истину), если выражение не равно нулю'
      }, {
        operator: 'IF(условие, значение_если_истинно, значение_если_ложь)',
        label: 'Возвращает одно значение, если условие оценивается как истинное, или другое, если оно оценивается как ложное'
      }, {
        operator: 'RANDOM()',
        label: 'Производит случайное число от 0 до 1'
      }, {
        operator: 'MIN(e1, e2, ...)',
        label: 'Возвращает наименьшее из заданных выражений'
      }, {
        operator: 'MAX(e1, e2, ...)',
        label: 'Возвращает наибольшее из заданных выражений'
      }, {
        operator: 'ABS(выражение)',
        label: 'Возвращает абсолютное (неотрицательное) значение выражения'
      }, {
        operator: 'ROUND(выражение, точность)',
        label: 'Округляет значение до определенного количества цифр, использует текущий режим округления'
      }, {
        operator: 'FLOOR(выражение)',
        label: 'Округляет значение до ближайшего целого числа в меньшую сторону'
      }, {
        operator: 'CEILING(выражение)',
        label: 'Округляет значение до ближайшего целого числа в большую сторону'
      }, {
        operator: 'LOG(выражение)',
        label: 'Возвращает натуральный логарифм (по основанию «e») выражения'
      }, {
        operator: 'LOG10(выражение)',
        label: 'Возвращает десятичный логарифм (по основанию «10») выражения'
      }, {
        operator: 'SQRT(выражение)',
        label: 'Возвращает квадратный корень из выражения'
      }, {
        operator: 'SINR(выражение)',
        label: 'Возвращает тригонометрический синус угла (в радианах)'
      }, {
        operator: 'COSR(выражение)',
        label: 'Возвращает тригонометрический косинус угла (в радианах)'
      }, {
        operator: 'TANR(выражение)',
        label: 'Возвращает тригонометрический тангенс угла (в радианах)'
      }, {
        operator: 'COTR(выражение)',
        label: 'Возвращает тригонометрический тангенс угла (в радианах)'
      }, {
        operator: 'SECR(выражение)',
        label: 'Возвращает секанс (в радианах)'
      }, {
        operator: 'CSCR(выражение)',
        label: 'Возвращает косеканс (в радианах)'
      }, {
        operator: 'ASINR(выражение)',
        label: 'Возвращает значение арксинуса (в радианах)'
      }, {
        operator: 'ACOSR(выражение)',
        label: 'Возвращает значение арккосинуса (в радианах)'
      }, {
        operator: 'ATANR(выражение)',
        label: 'Возвращает арктангенса (в радианах)'
      }, {
        operator: 'ACOTR(выражение)',
        label: 'Возвращает лавное значение арккотангенса, или обратного котангенса, числа (в радианах)'
      }, {
        operator: 'ATAN2R(у, х)',
        label: 'Возвращает арктангенс для заданных координат x и y (в радианах)'
      }, {
        operator: 'SIN(выражение)',
        label: 'Возвращает тригонометрический синус угла (в градусах)'
      }, {
        operator: 'COS(выражение)',
        label: 'Возвращает тригонометрический косинус угла (в градусах)'
      }, {
        operator: 'TAN(выражение)',
        label: 'Возвращает тригонометрические тангенс угла (в градусах)'
      }, {
        operator: 'COT(выражение)',
        label: 'Возвращает тригонометрический котангенс угла (в градусах)'
      }, {
        operator: 'SEC(выражение)',
        label: 'Возвращает секанс (в градусах)'
      }, {
        operator: 'CSC(выражение)',
        label: 'Возвращает косеканс (в градусах)'
      }, {
        operator: 'ASIN(выражение)',
        label: 'Возвращает значение арксинуса (в градусах)'
      }, {
        operator: 'ACOS(выражение)',
        label: 'Возвращает значение арккосинуса (в градусах)'
      }, {
        operator: 'ATAN(выражение)',
        label: 'Возвращает значение арктангенса (в градусах)'
      }, {
        operator: 'ACOT(выражение)',
        label: 'Возвращает лавное значение арккотангенса, или обратного котангенса, числа (в градусах)'
      }, {
        operator: 'ATAN2(у, х)',
        label: 'Возвращает арктангенс для заданных координат x и y'
      }, {
        operator: 'SINH(выражение)',
        label: 'Возвращает гиперболический синус'
      }, {
        operator: 'COSH(выражение)',
        label: 'Возвращает гиперболический косинус'
      }, {
        operator: 'TANH(выражение)',
        label: 'Возвращает гиперболический тангенс'
      }, {
        operator: 'COTH(выражение)',
        label: 'Возвращает гиперболический котангенс'
      }, {
        operator: 'SECH(выражение)',
        label: 'Возвращает гиперболический секанс (в градусах)'
      }, {
        operator: 'CSCH(выражение)',
        label: 'Возвращает гиперболический косеканс (в градусах)'
      }, {
        operator: 'ASINH(выражение)',
        label: 'Возвращает угол гиперболического синуса (в градусах)'
      }, {
        operator: 'ACOSH(выражение)',
        label: 'Возвращает угол гиперболического косинуса (в градусах)'
      }, {
        operator: 'ATANH(выражение)',
        label: 'Возвращает угол гиперболического тангенса значения'
      }, {
        operator: 'RAD(выражение)',
        label: 'Преобразует угол, измеренный в градусах, в приблизительно эквивалентный угол, измеренный в радианах'
      }, {
        operator: 'DEG(выражение)',
        label: 'Преобразует угол, измеренный в радианах, в приблизительно эквивалентный угол, измеренный в градусах'
      }, {
        operator: 'FACT(выражение)',
        label: 'Возвращает факториальное значение целого числа. Вернет 1 для 0 или отрицательного числа'
      },
    ]
  }

  constOperatorsSelectList: OperatorsList = {
    id: 3,
    valuesArr: [
      {
        operator: 'e',
        label: 'Значение e с точностью до 70 цифр'
      },
      {
        operator: 'PI',
        label: 'Значение PI с точностью до 100 цифр'
      },
      {
        operator: 'TRUE',
        label: 'Значение один («Истина»)'
      }, {
        operator: 'FALSE',
        label: 'Значение ноль (Ложь»)'
      },
      {
        operator: 'NULL',
        label: 'Значение отсутствует'
      }
    ]
  }


  ngOnInit() {
    this.input = document.getElementById('formula_input')! as HTMLInputElement;
    this.prevOperator = {
      id: -1,
      value: ''
    }
  }

  get value() {
    return this._value
  }

  set value(v) {
    if (v[v.length - 1] === '(') {
      v += ')'

      setTimeout(() => {
        this.input.setSelectionRange(v.length - 1, v.length - 1)
      }, 10);
    } else if (v[v.length - 2] === '(' && v[v.length - 1] === ')') {
      v += ')'

      setTimeout(() => {
        this.input.setSelectionRange(v.length - 2, v.length - 2)
      }, 10);
    }
    this._value = v
  }

  get operator() {
    return this._operator
  }

  set operator(v) {

    this._operator = v
    this.operatorsValues.math.value = this._operator

  }

  get boolOperator() {
    return this._boolOperator
  }

  set boolOperator(v) {
    this._boolOperator = v
    this.operatorsValues.bool.value = this._boolOperator
  }

  get logicalOperator() {
    return this._logicalOperator
  }

  set logicalOperator(v) {

    this._logicalOperator = v
    this.operatorsValues.log.value = this._logicalOperator

  }

  get constOperator() {
    return this._constOperator
  }

  set constOperator(v) {

    this._constOperator = v
    this.operatorsValues.dif.value = this._constOperator
  }
  inputCleared() {
    this.value = ''
    this.operator = ''
    this.boolOperator = ''
    this.logicalOperator = ''
    this.constOperator = ''
  }

  clearCurrentInput(operator: string) {
    console.log(operator);

    switch (operator) {
      case this.operator:
        console.log(1);

        this.operator = ''
        break;
      case this.boolOperator:
        console.log(2);
        this.boolOperator = ''
        break;
      case this.logicalOperator:
        console.log(3);
        this.logicalOperator = ''
        break;
      case this.constOperator:
        console.log(4);
        this.constOperator = ''
        break;
    }

  }

  selectOperator(operator: string, list: OperatorsList) {

    for (const key in list) {
      if (key === 'id') {
        if (this.prevOperator.value === operator && list[key] === this.prevOperator.id) return;
      }
    }


    setTimeout(() => {
      this.focusPosition = typeof this.input.selectionStart === 'number' ? this.input.selectionStart : 0


      this.input.setSelectionRange(this.focusPosition, this.focusPosition)
      if (this.value && operator) {
        this.value = this.value.slice(0, this.input.selectionStart) + operator + this.value.slice(this.input.selectionStart);
        this.prevOperator.value = operator
        this.prevOperator.id = list.id

      }
    }, 10);

  }
}
