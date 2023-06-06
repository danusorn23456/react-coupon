# React Coupon

A simeple react coupon component

![preview](https://github.com/danusorn23456/react-coupon/blob/main/src/assets/preview.png?raw=true)

## Props Reference

| Name            | Type                  | Default Value                                                          |
| --------------- | --------------------- | ---------------------------------------------------------------------- |
| title           | string                |                                                                        |
| description     | string                |                                                                        |
| backgroundColor | string                | "#FFFFFF"                                                              |
| fontColor       | string                | "#393939"                                                              |
| image           | string                |                                                                        |
| expire_at       | Date                  |                                                                        |
| used_at         | Date \| ""            |                                                                        |
| usedLabel       | (date: Date) => any   | (date: Date) => `used by ${date.toDateString()}`                       |
| expireLabel     | (days: number) => any | (days: number) => days ? `Valid for ${days} days from now` : `expired` |
| tag             | string[]              |                                                                        |
