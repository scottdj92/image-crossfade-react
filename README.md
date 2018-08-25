# image-crossfade-react
A crossfade component built with TypeScript and React 16

## Usage
You only need to pass in a source image URL to the crossfade component. The crossfade will occur when this src is updated.

```tsx
import CrossFadeImage from "image-crossfade-react";

<CrossFadeImage src="https://www.placecage.com/200/300"/>
```

## Full list of available props
| Name  | Required?  | Type  |
|---|---|---|
| src  | yes  | string  |
| duration  | no  | number  |
| className  | no  | string  |
| timingFunction  | no  | TransitionTimingFunctionProperty  |
| delay  | no | number (in milliseconds)  |
| alt  | no  | string  |
| style  | no  | React.CSSProperties  |

### Roadmap
* improve unit tests
