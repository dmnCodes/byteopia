import { mount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import GridPathFinder from './GridPathFinder.vue';

describe('GridPathFinder.vue', () => {
  test('renders the component', () => {
    const wrapper = mount(GridPathFinder);
    expect(wrapper.exists()).toBe(true);
  });

  test('updates the grid when "Update Grid" button is clicked', async () => {
    const wrapper = mount(GridPathFinder);
    const textarea = wrapper.find('textarea');
    const button = wrapper.find('button');

    await textarea.setValue('[[1, 2, 3], [4, 5, 6], [7, 8, 9]]');
    await button.trigger('click');

    const cells = wrapper.findAll('td');
    const cellValues = cells.map(cell => cell.text());

    expect(cellValues).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
  });

  test('calculates the minimum cost when "Calculate Minimum Cost" button is clicked', async () => {
    const wrapper = mount(GridPathFinder);
    const textarea = wrapper.find('textarea');
    const updateButton = wrapper.findAll('button')[0];

    await textarea.setValue('[[1, 2, 3], [4, 5, 6], [7, 8, 9]]');
    await updateButton.trigger('click');

    const calculateButton = wrapper.findAll('button')[1];
    await calculateButton.trigger('click');

    const result = wrapper.find('p').text();

    expect(result).toBe('Minimum Cost: 21');
  });

  test('shows error alert on invalid grid input', async () => {
    const wrapper = mount(GridPathFinder);
    const textarea = wrapper.find('textarea');
    const button = wrapper.find('button');

    global.alert = vi.fn();

    await textarea.setValue('invalid grid');
    await button.trigger('click');

    expect(global.alert).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledWith('Invalid grid format. Please enter a valid 2D array of numbers.');
  });
});
