import 'dotenv/config';

export const URLS = {
    BASE: process.env.BASE_URL || 'https://hotel-example-site.takeyaqa.dev/en-US/index.html',
    LOGIN: process.env.LOGIN_URL || 'https://hotel-example-site.takeyaqa.dev/en-US/login.html',
    MYPAGE: process.env.MYPAGE_URL || 'https://hotel-example-site.takeyaqa.dev/en-US/mypage.html',
    RESERVE: process.env.RESERVE_URL || 'https://hotel-example-site.takeyaqa.dev/en-US/plans.html',
    SIGNUP: process.env.SIGNUP_URL || 'https://hotel-example-site.takeyaqa.dev/en-US/signup.html'
}