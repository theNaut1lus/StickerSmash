import Index from "@/app/(tabs)"
import { render } from '@testing-library/react-native'

describe('<Index />', () => {
    test('Text renders correctly on Home Screen', () => {
        const { getByText } = render(<Index />)

        getByText('Welcome!');
    })
})