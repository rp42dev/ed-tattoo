import CardComponent from '../src/components/cardComponent';
import { shallow } from 'preact-render-spy';

describe('Initial Test of the CardComponent', () => {
    test('CardComponent renders 1 div', () => {
        const context = shallow(<CardComponent />);
        expect(context.find('div').length).toBe(4);
    });
});
