import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainComponent from './main';

Enzyme.configure({adapter: new Adapter()});

describe(`<MainComponent />`, () => {
  test(`simulate click evets`, () => {
    const onSectionTypeClick = jest.fn();

    const three = shallow(<MainComponent countPlaces = {300} onSectionTypeChange={onSectionTypeClick}/>);

    const sectionTypesElement = three.find(`.locations__list`);

    sectionTypesElement.props().onClick();

    expect(onSectionTypeClick.mock.calls.length).toBe(1);
  });
});
