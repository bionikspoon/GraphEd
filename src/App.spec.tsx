import { render, shallow } from 'enzyme'
import React from 'react'
import App from './App'

test('it matches snapshot', () => {
  const wrapper = render(<App />)

  expect(wrapper).toMatchSnapshot()
})

test('it renders without crashing', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toIncludeText('Learn React')
})
