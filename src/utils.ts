
import HoneyCombImg from './assets/images/honeycomb.png';
import BlackCherryChipImg from './assets/images/blackcherrychip.png';
import LemonPoppyImg from './assets/images/lemonpoppy.png';
import ButtermilkBerryCornbreadImg from './assets/images/buttermilkberrycornbread.png';
import ChocolateCaramelCheesecakeImg from './assets/images/chocolatecaramelcheesecake.png';
import CookiesAndCreamImg from './assets/images/cookiesandcream.png';
import MarionberryCheesecakeImg from './assets/images/marionberrycheesecake.png';
import SicilianPistachioImg from './assets/images/pistachio.png';

enum Flavor {
    HoneyComb = 'Honey Comb',
    BlackCherryChip = 'Black Cherry Chip',
    LemonPoppySeedMuffin = 'Lemon Poppy Seed Muffin',
    ButtermilkBerryCornbread = 'Buttermilk Berry Cornbread',
    ChocolateCaramelCheesecake = 'Chocolate Caramel Cheesecake',
    MarionBerryCheesecake = 'Marion Berry Cheesecake',
    CookiesAndCream = 'Cookies & Cream',
    SicilianPistachio = 'Sicilian Pistachio',
}

type MyState = {
    isCone: boolean,
    showNutritionInfo: boolean,
    scoops: Flavor[]
}

const FlavorImageMap = {
    [Flavor.HoneyComb]:  HoneyCombImg,
    [Flavor.BlackCherryChip]:  BlackCherryChipImg,
    [Flavor.LemonPoppySeedMuffin]: LemonPoppyImg,
    [Flavor.ButtermilkBerryCornbread]: ButtermilkBerryCornbreadImg,
    [Flavor.ChocolateCaramelCheesecake]: ChocolateCaramelCheesecakeImg,
    [Flavor.CookiesAndCream]: CookiesAndCreamImg,
    [Flavor.MarionBerryCheesecake]: MarionberryCheesecakeImg,
    [Flavor.SicilianPistachio]: SicilianPistachioImg
}

type Macro = {
    calories: number,
    fat: number,
    carbs: number,
    protein?: number
}

type MacroMapType = Record<Flavor, Macro>;

const MacroMap: MacroMapType = {
    [Flavor.HoneyComb]: {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.BlackCherryChip] : {
        calories: 200,
        fat: 20,
        carbs: 30
    },
    [Flavor.LemonPoppySeedMuffin] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.ButtermilkBerryCornbread] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.ChocolateCaramelCheesecake] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.MarionBerryCheesecake] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.CookiesAndCream] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
    [Flavor.SicilianPistachio] : {
        calories: 300,
        fat: 30,
        carbs: 30
    },
}

export { Flavor, type MyState, type Macro, FlavorImageMap, MacroMap, type MacroMapType}
