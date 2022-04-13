import { render, screen } from '@testing-library/react';
import W12MHeader from './W12MHeader';

describe('W12MHeader Component', () => {
	test('renders header text', () => {
		render(<W12MHeader />);
		const someHeaderText = screen.getByText(
			/Each species may only submit ONE W-12-M form./i
		);
		expect(someHeaderText).toBeInTheDocument();
	});
  });
