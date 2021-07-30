import React from 'react';
import  '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import {NavLink } from 'react-router-dom';
import Landing from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Landing />', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Landing/>)
    })
  
    it('Deberia renderizar un <NavLink />', () => {
      expect(wrapper.find(NavLink)).toHaveLength(1);
    });

    it('El NavLink debe cambiar la ruta hacia "/home".', () => {
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
      });

    it('Renderiza un <label>', () => {
      expect(wrapper.find('label')).toHaveLength(1)
    })

    it('Renderiza un <h1>', () => {
      expect(wrapper.find('h1')).toHaveLength(1)
    })

    it('Renderiza un <h3>', () => {
      expect(wrapper.find('h3')).toHaveLength(1)
    })

    it('Renderiza un <img>', () => {
      expect(wrapper.find('img')).toHaveLength(1)
    })

});

