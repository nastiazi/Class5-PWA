var cacheName = "telem-projects-cache-v1"
//מערך עם כל הדברים הסטטים שיש לנו 
//אנחנו שמים את כל הנתיבים שיש לנו בתוך הפרויקט
var assets = [
    "./",
    "index.html",
    "css/style.css",
    "css/bootstrap.rtl.min.css",
    "js/main.js",
    "js/bootstrap.bundle.js",
    "images/img_1.jpg",
    "images/img_2.jpg",
    "images/img_3.jpg",
    "images/img_4.jpg",
    "images/img_5.jpg",
    "images/img_6.jpg",
    "images/img_7.png",
    "images/img_8.png",
    "images/img_9.png",
]


//בהתקנה הראשונה של האתר, נפתח זכרון מטמון ונוסיף אליו את הקבצים
//לך לזכרון המטמון
//ותפתח קאצ' חדש (זכרון מטמון חדש) עם השם שהגדרתי
//ואחריי זה
//תוסיף לקאש שפתחת את כל המשתנים שפתחתי
//המשתנים assests שנפתח מקודם
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
});

//fetch - פנייה לשרת, קריאה לשרת ולהביא ממנו מידע
//הקבצים שאיתם אנחנו עובדים איתם
//אל תביא ישר אותם, לך לcaches שלי
//ולבדוק האם יש משהו שתואם את הבקשה הזאת
//במידה וכן, response 
//במידה ולא אז תעשה fetch עם הבקשה ששלחתי

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
