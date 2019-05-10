webpack-IE-polyfill
---

## Project Stack
- React 16.8.6 (hook)
- Redux
- TypeScript
- SASS

## IE version
- IE9, Win7
- IE10, Win7
- IE11, Win7
- IE11, Win81
- Edge, Win10

> in VirtualBox. [Download virtual machines](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

## Async
### Axios
Axios does not work with polyfill in IE9.
But, In IE9 it should be either http to http or https to https. so change the local code to point to http.
- [View detail solve axios IE9](https://github.com/axios/axios/issues/246#issuecomment-189413998)
- [Test feature async](https://github.com/hyunalee419/webpack-React-IE-polyfill/tree/feature/async)

### Fetch
Fetch does work with polyfill in IE9.
- [with Polyfill](https://github.com/github/fetch)
