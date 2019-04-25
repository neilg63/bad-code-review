import React from 'react';
import ExampleComponent from './index';
import { mount } from 'enzyme';
// follow this as a standard way to init all tests
const setup = propOverrides => {
  const props = {
    onResultSelection: jest.fn(),
    ...propOverrides
  };

  const wrapper = mount(<ExampleComponent {...props} />);

  return {
    props,
    wrapper,
    fakeEvent: { preventDefault: jest.fn() }
  };
};

describe('Example Search', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
    // or expect(wrapper).toMatchSnapshot()
  });

  it('should update state when entering a search', () => {
    const { wrapper, fakeEvent } = setup();

    wrapper.find('input').simulate('change', {
      target: { value: 'search' },
      fakeEvent
    });
    expect(wrapper.state().search).toEqual('search');
  });

  it('should call submit function when entering a search', () => {
    const { wrapper, fakeEvent } = setup();
    const spy = jest.spyOn(wrapper.instance(), 'handleSearch');
    // on a shallow render the instance method is already created so the events bindings happen on the original method, NOT the mock func.
    // we need to call a manual update after creating the spy mock to re-bind the event https://github.com/airbnb/enzyme/issues/365
    wrapper.instance().forceUpdate();
    wrapper.find('input').simulate('change', {
      target: { value: 'search' },
      fakeEvent
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should clear an existing search when clicking the clear button', () => {
    const { wrapper } = setup();
    wrapper.setState({ search: '7 leny' });
    expect(wrapper.state().search).toEqual('7 leny');
    wrapper.instance().clearSearch();
    expect(wrapper.state().search).toEqual('');
  });
});
