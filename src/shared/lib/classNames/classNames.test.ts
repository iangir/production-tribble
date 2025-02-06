import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});
	test('with additional params', () => {
		expect(
			classNames(
				'someClass',
				{ hovered: undefined, scrollable: false, disabled: true },
				['class1', 'class2'],
			),
		).toBe('someClass disabled class1 class2');
	});
});
