// import { PolarisVizProvider, BarChart, LineChart } from '@shopify/polaris-viz'
// import '@shopify/polaris-viz/build/esm/styles.css'

// // Polaris Data Viz Lib
// // https://github.com/Shopify/polaris-viz

// export default function ShopifyCharts() {
//     return (
//         <PolarisVizProvider
//             themes={{
//                 Default: {
//                     chartContainer: {
//                         padding: '20px',
//                     },
//                 },
//             }}
//         >
//             <div
//                 style={{
//                     height: '500px',
//                 }}
//             >
//                 <BarChart
//                     theme="Light"
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 3,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -8,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Breakfast',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 4,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -10,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: 15,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 8,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Lunch',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 7,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -15,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -12,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 5,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Dinner',
//                         },
//                     ]}
//                     type="stacked"
//                 />
//             </div>
//             <div
//                 style={{
//                     height: '500px',
//                 }}
//             >
//                 <BarChart
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 3,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -8,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Breakfast',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 4,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -10,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: 15,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 8,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Lunch',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 7,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -15,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -12,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 5,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Dinner',
//                         },
//                     ]}
//                     type="stacked"
//                 />
//             </div>
//             <div
//                 style={{
//                     height: '500px',
//                     marginBottom: '50px',
//                 }}
//             >
//                 <BarChart
//                     theme="Light"
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 3,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -8,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Breakfast',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 4,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -10,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: 15,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 8,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Lunch',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 7,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -15,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -12,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 5,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Dinner',
//                         },
//                     ]}
//                 />
//             </div>
//             <div
//                 style={{
//                     height: '500px',
//                     marginBottom: '50px',
//                 }}
//             >
//                 <BarChart
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 3,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -7,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -8,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Breakfast',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 4,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -10,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: 15,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 8,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Lunch',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Monday',
//                                     value: 7,
//                                 },
//                                 {
//                                     key: 'Tuesday',
//                                     value: 0,
//                                 },
//                                 {
//                                     key: 'Wednesday',
//                                     value: -15,
//                                 },
//                                 {
//                                     key: 'Thursday',
//                                     value: -12,
//                                 },
//                                 {
//                                     key: 'Friday',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Saturday',
//                                     value: 5,
//                                 },
//                                 {
//                                     key: 'Sunday',
//                                     value: 0.1,
//                                 },
//                             ],
//                             name: 'Dinner',
//                         },
//                     ]}
//                 />
//             </div>
//             <div style={{ height: '500px', marginBottom: '50px' }}>
//                 <BarChart
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: 'Parka',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 49,
//                                 },
//                             ],
//                             name: 'Series 1',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Hat',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 30,
//                                 },
//                             ],
//                             name: 'Series 2',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 29,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 46,
//                                 },
//                             ],
//                             name: 'Series 3',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Shoes',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Pants',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 26,
//                                 },
//                             ],
//                             name: 'Series 4',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Glasses',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 44,
//                                 },
//                             ],
//                             name: 'Series 5',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Shorts',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Toque',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: 'Toque',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Pants',
//                                     value: 28,
//                                 },
//                             ],
//                             name: 'Series 6',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Parka',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Parka',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: 'Socks',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 40,
//                                 },
//                             ],
//                             name: 'Series 7',
//                         },
//                     ]}
//                 />
//             </div>
//             <div style={{ height: '500px', marginBottom: '50px' }}>
//                 <BarChart
//                     theme="Light"
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: 'Parka',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 49,
//                                 },
//                             ],
//                             name: 'Series 1',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Hat',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 30,
//                                 },
//                             ],
//                             name: 'Series 2',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 29,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Hat',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 46,
//                                 },
//                             ],
//                             name: 'Series 3',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Shoes',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: 'Pants',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: 'Jacket',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 26,
//                                 },
//                             ],
//                             name: 'Series 4',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Glasses',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: 'Shorts',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 44,
//                                 },
//                             ],
//                             name: 'Series 5',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Shorts',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Shoes',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Toque',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: 'Toque',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: 'Scarfs',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Shirts',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Pants',
//                                     value: 28,
//                                 },
//                             ],
//                             name: 'Series 6',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: 'Parka',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: 'Sweat pants',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: 'Wind-breaker',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: 'Parka',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: 'Beanies',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: 'Hoodies',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: 'Socks',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: 'Flip Flops',
//                                     value: 40,
//                                 },
//                             ],
//                             name: 'Series 7',
//                         },
//                     ]}
//                 />
//             </div>
//             <div
//                 style={{
//                     height: 400,
//                 }}
//             >
//                 <LineChart
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 21,
//                                 },
//                             ],
//                             name: 'Series 1',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 26,
//                                 },
//                             ],
//                             name: 'Series 2',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 29,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 36,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 38,
//                                 },
//                             ],
//                             name: 'Series 3',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 36,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 36,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 40,
//                                 },
//                             ],
//                             name: 'Series 4',
//                         },
//                     ]}
//                 />
//             </div>

//             <div
//                 style={{
//                     height: 400,
//                 }}
//             >
//                 <LineChart
//                     data={[
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 39,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 33,
//                                 },
//                             ],
//                             name: 'Series 1',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 49,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 28,
//                                 },
//                             ],
//                             name: 'Series 2',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 43,
//                                 },
//                             ],
//                             name: 'Series 3',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 39,
//                                 },
//                             ],
//                             name: 'Series 4',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 32,
//                                 },
//                             ],
//                             name: 'Series 5',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 26,
//                                 },
//                             ],
//                             name: 'Series 6',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 50,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 45,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 31,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 29,
//                                 },
//                             ],
//                             name: 'Series 7',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 37,
//                                 },
//                             ],
//                             name: 'Series 8',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 20,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 38,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 25,
//                                 },
//                             ],
//                             name: 'Series 9',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 44,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 22,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 40,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 43,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 48,
//                                 },
//                             ],
//                             name: 'Series 10',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 26,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 25,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 42,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 35,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-01T12:00:00',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 35,
//                                 },
//                             ],
//                             name: 'Series 11',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-06T12:00:00',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 37,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 41,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 40,
//                                 },
//                             ],
//                             name: 'Series 12',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 47,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 27,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 30,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-03T12:00:00',
//                                     value: 23,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 24,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 30,
//                                 },
//                             ],
//                             name: 'Series 13',
//                         },
//                         {
//                             data: [
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 21,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 46,
//                                 },
//                                 {
//                                     key: '2020-04-08T12:00:00',
//                                     value: 33,
//                                 },
//                                 {
//                                     key: '2020-04-04T12:00:00',
//                                     value: 28,
//                                 },
//                                 {
//                                     key: '2020-04-05T12:00:00',
//                                     value: 34,
//                                 },
//                                 {
//                                     key: '2020-04-09T12:00:00',
//                                     value: 48,
//                                 },
//                                 {
//                                     key: '2020-04-10T12:00:00',
//                                     value: 36,
//                                 },
//                                 {
//                                     key: '2020-04-02T12:00:00',
//                                     value: 32,
//                                 },
//                                 {
//                                     key: '2020-04-07T12:00:00',
//                                     value: 26,
//                                 },
//                             ],
//                             name: 'Series 14',
//                         },
//                     ]}
//                 />
//             </div>
//         </PolarisVizProvider>
//     )
// }
