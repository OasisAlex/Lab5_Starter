// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check phone number', () => {
  expect(isPhoneNumber(958-623-5462)).toBe(true);
});

test('check phone number', () => {
  expect(isPhoneNumber(456-842-1568)).toBe(true);
});

test('check phone number', () => {
  expect(isPhoneNumber(12345)).toBe(false);
});

test('check phone number', () => {
  expect(isPhoneNumber(25684)).toBe(false);
});

test('check if it is Email', () => {
  expect(isEmail('sjow@gmail.com')).toBe(true)
});

test('check if it is Email', () => {
  expect(isEmail('alex@yahoo.com')).toBe(true)
});

test('check if it is Email', () => {
  expect(isEmail('sjowgmail.com')).toBe(false)
});

test('check if it is Email', () => {
  expect(isEmail('alexyeahcom')).toBe(false)
});

test('check strong password', () => {
  expect(isStrongPassword('aS31ji_s')).toBe(true)
});

test('check strong password', () => {
  expect(isStrongPassword('asld52')).toBe(true)
});

test('check strong password', () => {
  expect(isStrongPassword('acd')).toBe(false)
});

test('check strong password', () => {
  expect(isStrongPassword('leix!')).toBe(false)
});

test('check Date', () => {
  expect(isDate('12/02/1598')).toBe(true)
});

test('check Date', () => {
  expect(isDate('02/05/2098')).toBe(true)
});

test('check Date', () => {
  expect(isDate('132/022/1598')).toBe(false)
});

test('check Date', () => {
  expect(isDate('1221598')).toBe(false)
});

test('check color', () => {
  expect(isHexColor('#324')).toBe(true)
});

test('check color', () => {
  expect(isHexColor('0A2E4A')).toBe(true)
});

test('check color', () => {
  expect(isHexColor('#1258')).toBe(false)
});

test('check color', () => {
  expect(isHexColor('#6581ADf')).toBe(false)
});