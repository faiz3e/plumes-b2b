const ageRange = {
    zeroTofiveYears: ['newBorn', '0-3', '3-6', '6-9', '9-12', '12-24', '24-36', '36-48', '48-60'],
    oneToNineMonths: ['0-3', '3-6', '6-9']
}
const textAgeMapping = {
    oneToNineMonths: ['0-3 Months', '3-6 Months', '6-9 Months'],
    zeroTofiveYears: ['New born', '0-3 Months', '3-6 Months', '6-9 Months', "1 year", '2 year', '3 year', '4 year', '5 year']
}
export const products = {
    boys: {
        bear: {
            name: 'Baby Bear',
            description: '100% Supima cotton, soft and breathable premium fabric for delicate baby skin.',
            sku: 'PLM-BEAR-001',
            theme: 'Bear',
            color: 'brown',
            subTitle: 'Softest newborn essentials for your little cub',
            gender: 'Unisex',
            ageRange: ageRange.oneToNineMonths,
            price: '220',
            discountedPrice: '200',
            offerPercentage: '10',
            totalNumberOfItems: 7,
            stockAvailable: 50,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, tumble dry low',
            images: [
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
            ],
            supporingImages: [
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
                './images/boys/home-slide2.png',
            ],
            tags: ['baby set', 'unisex', 'supima cotton', 'newborn gift', 'bear', 'brown', 'beige'],
            launchDate: '2025-05-15',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Romper', price: '50' },
                { name: 'Cap', price: '20' },
                { name: 'Mittens', price: '30' },
                { name: 'Shoes', price: '50' },
                { name: 'Swaddle', price: '30' },
                { name: 'Teether', price: '40' }
            ]
        },
        boxer: {
            name: 'Baby Boxer',
            description: 'Sporty and comfy set made from 100% Supima cotton for your active little champ.',
            sku: 'PLM-BOXER-001',
            theme: 'Boxer',
            color: 'blue',
            subTitle: 'A fun & cozy outfit set for your baby’s playful days',
            gender: 'Boy',
            ageRange: ageRange.oneToNineMonths,
            price: '230',
            discountedPrice: '210',
            offerPercentage: '9',
            totalNumberOfItems: 6,
            stockAvailable: 40,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, tumble dry low',
            images: [
                './images/boys/boxer1.png',
                './images/boys/boxer2.png',
                './images/boys/boxer3.png',
                './images/boys/boxer4.png',
                './images/boys/boxer5.png',
                './images/boys/boxer6.png'
            ],
            supporingImages: [
                './images/boys/boxer-detail1.png',
                './images/boys/boxer-detail2.png',
                './images/boys/boxer-detail3.png'
            ],
            tags: ['baby set', 'boys', 'supima cotton', 'playwear', 'boxer', 'blue'],
            launchDate: '2025-06-01',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: false,
            items: [
                { name: 'T-Shirt', price: '60' },
                { name: 'Shorts', price: '60' },
                { name: 'Cap', price: '30' },
                { name: 'Socks', price: '20' },
                { name: 'Bib', price: '30' },
                { name: 'Teether', price: '30' }
            ]
        },

        astronaut: {
            name: 'Little Astronaut',
            description: 'Inspired by outer space adventures, this set is made from 100% Supima cotton for comfort and dreams beyond the stars.',
            sku: 'PLM-ASTRO-001',
            theme: 'Astronaut',
            color: 'white & navy',
            subTitle: 'A dreamy space-themed outfit set for your future explorer',
            gender: 'Unisex',
            ageRange: ageRange.oneToNineMonths,
            price: '240',
            discountedPrice: '210',
            offerPercentage: '12',
            totalNumberOfItems: 6,
            stockAvailable: 60,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, do not bleach, tumble dry low',
            images: [
                './images/unisex/astro1.png',
                './images/unisex/astro2.png',
                './images/unisex/astro3.png',
                './images/unisex/astro4.png',
                './images/unisex/astro5.png',
                './images/unisex/astro6.png'
            ],
            supporingImages: [
                './images/unisex/astro-detail1.png',
                './images/unisex/astro-detail2.png',
                './images/unisex/astro-detail3.png'
            ],
            tags: ['baby set', 'unisex', 'supima cotton', 'astronaut', 'space', 'navy', 'white'],
            launchDate: '2025-06-10',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Space Romper', price: '60' },
                { name: 'Helmet Cap', price: '30' },
                { name: 'Socks', price: '20' },
                { name: 'Swaddle', price: '40' },
                { name: 'Teether (Rocket)', price: '30' },
                { name: 'Bib', price: '30' }
            ]
        }
        ,
        pirate: {
            name: 'Lil Pirate',
            description: 'Ahoy! This pirate-themed set is crafted from 100% Supima cotton, keeping your baby cozy through every adventure.',
            sku: 'PLM-PIRATE-001',
            theme: 'Pirate',
            color: 'navy & red',
            subTitle: 'A treasure-worthy outfit set for your little captain',
            gender: 'Boy',
            ageRange: ageRange.oneToNineMonths,
            price: '235',
            discountedPrice: '210',
            offerPercentage: '11',
            totalNumberOfItems: 6,
            stockAvailable: 45,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, wash with like colors, tumble dry low',
            images: [
                './images/boys/pirate1.png',
                './images/boys/pirate2.png',
                './images/boys/pirate3.png',
                './images/boys/pirate4.png',
                './images/boys/pirate5.png',
                './images/boys/pirate6.png'
            ],
            supporingImages: [
                './images/boys/pirate-detail1.png',
                './images/boys/pirate-detail2.png',
                './images/boys/pirate-detail3.png'
            ],
            tags: ['baby set', 'boy', 'supima cotton', 'pirate', 'navy', 'adventure'],
            launchDate: '2025-06-20',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: false,
            items: [
                { name: 'Pirate Romper', price: '60' },
                { name: 'Eye Patch Cap', price: '30' },
                { name: 'Striped Bib', price: '25' },
                { name: 'Booties', price: '30' },
                { name: 'Swaddle (Map Print)', price: '40' },
                { name: 'Teether (Anchor)', price: '30' }
            ]
        },

        emiratiKandurah: {
            name: 'Emirati Kandurah Set',
            description: 'A traditional Emirati outfit made with 100% Supima cotton, tailored for comfort and cultural pride in every tiny detail.',
            sku: 'PLM-KANDURAH-001',
            theme: 'Emirati Kandurah',
            color: 'white & beige',
            subTitle: 'A heritage-inspired look for your little gentleman',
            gender: 'Boy',
            ageRange: ageRange.zeroTofiveYears,
            price: '250',
            discountedPrice: '220',
            offerPercentage: '12',
            totalNumberOfItems: 6,
            stockAvailable: 30,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Hand wash preferred, or gentle machine wash cold, hang to dry',
            images: [
                './images/boys/kandurah1.png',
                './images/boys/kandurah2.png',
                './images/boys/kandurah3.png',
                './images/boys/kandurah4.png',
                './images/boys/kandurah5.png',
                './images/boys/kandurah6.png'
            ],
            supporingImages: [
                './images/boys/kandurah-detail1.png',
                './images/boys/kandurah-detail2.png',
                './images/boys/kandurah-detail3.png'
            ],
            tags: ['baby set', 'emirati', 'kandurah', 'traditional', 'supima cotton', 'white', 'beige'],
            launchDate: '2025-07-01',
            availableSizes: textAgeMapping.zeroTofiveYears,
            isBestSeller: true,
            items: [
                { name: 'Kandurah', price: '80' },
                { name: 'Head Cap (Ghutrah style)', price: '30' },
                { name: 'Mini Bisht', price: '40' },
                { name: 'Swaddle', price: '30' },
                { name: 'Sandal-style Booties', price: '40' },
                { name: 'Tasbih (Soft Plush)', price: '30' }
            ]
        },
    },
    girls: {
        sakurah: {
            name: 'Sakurah Blossom Set',
            description: 'Inspired by cherry blossoms, this 100% Supima cotton set wraps your little one in gentle, floral elegance.',
            sku: 'PLM-SAKURAH-001',
            theme: 'Sakurah',
            color: 'pink & ivory',
            subTitle: 'A delicate cherry blossom-themed set for your baby girl',
            gender: 'Girl',
            ageRange: ageRange.oneToNineMonths,
            price: '240',
            discountedPrice: '215',
            offerPercentage: '10',
            totalNumberOfItems: 6,
            stockAvailable: 55,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Gentle machine wash cold, do not bleach, tumble dry low',
            images: [
                '/images/girls/home-slide1.png',
                '/images/girls/sakurah2.png',
                '/images/girls/sakurah3.png',
                '/images/girls/sakurah4.png',
                '/images/girls/sakurah5.png',
                '/images/girls/sakurah6.png'
            ],
            supporingImages: [
                '/images/girls/sakurah-detail1.png',
                '/images/girls/sakurah-detail2.png',
                '/images/girls/sakurah-detail3.png'
            ],
            tags: ['baby set', 'girl', 'sakurah', 'cherry blossom', 'supima cotton', 'pink', 'soft'],
            launchDate: '2025-07-10',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Sakurah Romper (Blossom print)', price: '60' },
                { name: 'Matching Headband', price: '30' },
                { name: 'Soft Cape (Net with embroidery)', price: '40' },
                { name: 'Swaddle', price: '30' },
                { name: 'Booties', price: '40' },
                { name: 'Teether (Floral)', price: '30' }
            ]
        },

        daisy: {
            name: 'Daisy Dream Set',
            description: 'Bright and breezy like a spring morning, this 100% Supima cotton set is adorned with charming daisy details for your little sunshine.',
            sku: 'PLM-DAISY-001',
            theme: 'Daisy',
            color: 'butter yellow & white',
            subTitle: 'A floral fantasy for baby girls in soft cotton comfort',
            gender: 'Girl',
            ageRange: ageRange.oneToNineMonths,
            price: '245',
            discountedPrice: '220',
            offerPercentage: '10',
            totalNumberOfItems: 6,
            stockAvailable: 50,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, gentle cycle, lay flat to dry',
            images: [
                './images/girls/home-slide1.png',
                './images/girls/daisy2.png',
                './images/girls/daisy3.png',
                './images/girls/daisy4.png',
                './images/girls/daisy5.png',
                './images/girls/daisy6.png'
            ],
            supporingImages: [
                './images/girls/daisy-detail1.png',
                './images/girls/daisy-detail2.png',
                './images/girls/daisy-detail3.png'
            ],
            tags: ['baby set', 'girl', 'daisy', 'flower theme', 'supima cotton', 'yellow', 'white', 'spring'],
            launchDate: '2025-07-20',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Daisy Romper (Embroidered)', price: '65' },
                { name: 'Matching Headband', price: '25' },
                { name: 'Cape with Daisy Lace Trim', price: '40' },
                { name: 'Swaddle', price: '30' },
                { name: 'Booties', price: '40' },
                { name: 'Teether (Daisy-shaped)', price: '35' }
            ]
        }
        ,
        butterfly: {
            name: 'Butterfly Whispers Set',
            description: 'A dreamy set inspired by fluttering butterflies, crafted with 100% Supima cotton for delicate baby skin and magical days.',
            sku: 'PLM-BUTTERFLY-001',
            theme: 'Butterfly',
            color: 'lavender & cream',
            subTitle: 'Soft, fluttery elegance for your baby girl',
            gender: 'Girl',
            ageRange: ageRange.oneToNineMonths,
            price: '250',
            discountedPrice: '225',
            offerPercentage: '10',
            totalNumberOfItems: 6,
            stockAvailable: 48,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, gentle cycle, tumble dry low',
            images: [
                './images/girls/home-slide1.png',
                './images/girls/butterfly2.png',
                './images/girls/butterfly3.png',
                './images/girls/butterfly4.png',
                './images/girls/butterfly5.png',
                './images/girls/butterfly6.png'
            ],
            supporingImages: [
                './images/girls/butterfly-detail1.png',
                './images/girls/butterfly-detail2.png',
                './images/girls/butterfly-detail3.png'
            ],
            tags: ['baby set', 'girl', 'butterfly', 'supima cotton', 'lavender', 'whimsical', 'soft'],
            launchDate: '2025-07-25',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: false,
            items: [
                { name: 'Butterfly Romper (Wing print)', price: '65' },
                { name: 'Headband with Bow', price: '25' },
                { name: 'Cape with Butterfly Net Embroidery', price: '45' },
                { name: 'Swaddle', price: '30' },
                { name: 'Booties', price: '40' },
                { name: 'Teether (Butterfly-shaped)', price: '35' }
            ]
        }
        ,
        rabbit: {
            name: 'Bunny Snuggles Set',
            description: 'This bunny-inspired set made from 100% Supima cotton is perfect for cuddles, giggles, and gentle play all day.',
            sku: 'PLM-RABBIT-001',
            theme: 'Rabbit',
            color: 'soft grey & blush pink',
            subTitle: 'Adorably soft and bunny-themed essentials for your little one',
            gender: 'Unisex',
            ageRange: ageRange.oneToNineMonths,
            price: '240',
            discountedPrice: '215',
            offerPercentage: '10',
            totalNumberOfItems: 6,
            stockAvailable: 52,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold, gentle cycle, do not tumble dry high',
            images: [
                './images/girls/home-slide1.png',
                './images/girls/rabbit2.png',
                './images/girls/rabbit3.png',
                './images/girls/rabbit4.png',
                './images/girls/rabbit5.png',
                './images/girls/rabbit6.png'
            ],
            supporingImages: [
                './images/unisex/rabbit-detail1.png',
                './images/unisex/rabbit-detail2.png',
                './images/unisex/rabbit-detail3.png'
            ],
            tags: ['baby set', 'unisex', 'rabbit', 'bunny', 'supima cotton', 'grey', 'pink', 'cute'],
            launchDate: '2025-08-01',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Bunny Romper (Ears on hood)', price: '65' },
                { name: 'Head Cap with Bunny Ears', price: '30' },
                { name: 'Cape with Fluffy Tail Detail', price: '40' },
                { name: 'Swaddle', price: '30' },
                { name: 'Booties', price: '40' },
                { name: 'Teether (Bunny-shape)', price: '35' }
            ]
        }
        ,
        unicorn: {
            name: 'Unicorn Magic Set',
            description: 'Bring the magic to your baby’s wardrobe with this pastel unicorn-themed set made from 100% Supima cotton for all-day comfort and charm.',
            sku: 'PLM-UNICORN-001',
            theme: 'Unicorn',
            color: 'pastel pink, lilac & mint',
            subTitle: 'A dreamy and magical baby girl set inspired by unicorns',
            gender: 'Girl',
            ageRange: ageRange.oneToNineMonths,
            price: '255',
            discountedPrice: '230',
            offerPercentage: '10',
            totalNumberOfItems: 6,
            stockAvailable: 58,
            fabricType: 'Supima Cotton',
            washingInstructions: 'Machine wash cold with like colors, gentle cycle, air dry recommended',
            images: [
                './images/girls/home-slide1.png',
                './images/girls/unicorn2.png',
                './images/girls/unicorn3.png',
                './images/girls/unicorn4.png',
                './images/girls/unicorn5.png',
                './images/girls/unicorn6.png'
            ],
            supporingImages: [
                './images/girls/unicorn-detail1.png',
                './images/girls/unicorn-detail2.png',
                './images/girls/unicorn-detail3.png'
            ],
            tags: ['baby set', 'girl', 'unicorn', 'magical', 'pastel', 'supima cotton', 'pink', 'lilac'],
            launchDate: '2025-08-08',
            availableSizes: textAgeMapping.oneToNineMonths,
            isBestSeller: true,
            items: [
                { name: 'Unicorn Romper (Pastel Horn Print)', price: '70' },
                { name: 'Horn Headband with Ears', price: '30' },
                { name: 'Cape with Rainbow Tulle', price: '45' },
                { name: 'Swaddle', price: '30' },
                { name: 'Booties', price: '40' },
                { name: 'Teether (Unicorn-shaped)', price: '40' }
            ]
        }

    }
}