import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'xyz';

    const component = shallow(<TripSummary id={expectedId} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct image & has correct alt', () => {
    const expectedImage = 'image';
    const expectedAlt = 'text';

    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost & days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedDays = 5;
    const expectedCost = '10';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });

  it('should render correct tags array', () => {
    const expectedTags = ['teskt1', 'teskt2', 'teskt3'];

    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('shouldn`t render div if props tags is false or is an empty array', () => {
    const expectedTags = [];

    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toBeTruthy();
  });

});
