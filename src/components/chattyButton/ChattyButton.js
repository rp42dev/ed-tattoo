import { h } from 'preact'

import { Button } from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'

export const ChattyButton = () => (
    <Button raised onClick={e => alert('You clicked the button!')}>Click me</Button>
)