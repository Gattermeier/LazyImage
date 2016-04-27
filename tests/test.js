import React from 'react';
import Code from 'code';
import Lab from 'lab';
const lab = exports.lab = Lab.script();

import { shallow, mount, render } from 'enzyme';

const suite = lab.suite;
const test = lab.test;
const expect = Code.expect;

import LazyImageWrapper from '../src/index';

suite('LazyImage Component', () => {
  test('LazyImage does not throw error without props', (done) => {
    const wrapper = shallow( <LazyImageWrapper /> );
    expect(wrapper).to.exist();
    done();
  });
  test('Should contain <LazyImage> and <FullImage> components', (done) => {
    const wrapper = shallow(<LazyImageWrapper />);
    expect(wrapper.find('LazyImage')).to.exist();
    expect(wrapper.find('FullImage')).to.exist();
    done()
  })
  test('Should have default props', (done) => {
    const wrapper = mount( <LazyImageWrapper /> );
    expect(wrapper.props().blurRadius).to.equal("10");
    expect(wrapper.props().width).to.equal("600");
    expect(wrapper.props().height).to.equal("190");
    done();
  })
});
