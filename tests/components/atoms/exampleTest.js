import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Example from '../../../src/components/atoms/example';

describe('Example', () => {
  describe('render', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Example />);
      expect(wrapper.find('div').text()).to.equal('An example React component');
    });
  });
});
