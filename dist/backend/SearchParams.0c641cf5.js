var $72EGm$react = require("react");
var $72EGm$reactjsxruntime = require("react/jsx-runtime");
var $72EGm$reactrouterdom = require("react-router-dom");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequireaddb"];
parcelRequire.register("36Dha", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $243066060ef4ad3f$export$2e2bcd8739ae039);


var $lcFQK = parcelRequire("lcFQK");

var $B45GO = parcelRequire("B45GO");

var $95T92 = parcelRequire("95T92");


const $243066060ef4ad3f$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
function $243066060ef4ad3f$var$SearchParams() {
    const [location, setLocation] = (0, $72EGm$react.useState)("");
    const [animal1, setAnimal] = (0, $72EGm$react.useState)("");
    const [breed1, setBreed] = (0, $72EGm$react.useState)(""); // pets will hold an array with all the pets comming from API.
    const [pets, setPets] = (0, $72EGm$react.useState)([]); // useBreedList is a custom hook.
    const [breeds] = (0, $95T92.default)(animal1); // In order to use the Context in a child component, we need to access it using the useContext Hook.
    // as we sent an array, therefore destructuring the array.
    const [theme, setTheme] = (0, $72EGm$react.useContext)((0, $lcFQK.default));
    (0, $72EGm$react.useEffect)(()=>{
        requestPets();
    }, []); // async function to get data from API endpoint
    async function requestPets() {
        // response of the fetch request
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed1}`); // takes a response and parsing the body text as JSON
        const json = await response.json(); // console.log(json.pets);
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("div", {
        className: "search-params my-0 mx-auto px-0 w-11/12",
        children: [
            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("form", {
                className: "search-params p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900",
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                },
                children: [
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("label", {
                        htmlFor: "location",
                        className: "search-label",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("input", {
                                className: "search-control block",
                                id: "location",
                                onChange: (e)=>setLocation(e.target.value),
                                value: location,
                                placeholder: "Location"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("label", {
                        htmlFor: "animal",
                        className: "search-label",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("select", {
                                className: "search-control block",
                                id: "animal",
                                value: animal1,
                                onChange: (e)=>setAnimal(e.target.value),
                                onBlur: (e)=>setAnimal(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {}),
                                    $243066060ef4ad3f$var$ANIMALS.map((animal)=>/*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("label", {
                        htmlFor: "breed",
                        className: "search-label",
                        children: [
                            "breed",
                            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("select", {
                                className: "search-control disabled:opacity-50 block",
                                disabled: !breeds.length,
                                id: "breed",
                                value: breed1,
                                onChange: (e)=>setBreed(e.target.value),
                                onBlur: (e)=>setBreed(e.target.value),
                                children: breeds.map((breed)=>/*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                        value: breed,
                                        children: breed
                                    }, breed))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("label", {
                        htmlFor: "theme",
                        className: "search-label",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("select", {
                                className: "search-control block",
                                value: theme,
                                onChange: (e)=>setTheme(e.target.value),
                                onBlur: (e)=>setTheme(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }),
                                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                        value: "darkblue",
                                        children: "Dark Blue"
                                    }),
                                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                        value: "chartreuse",
                                        children: "Chartreuse"
                                    }),
                                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("option", {
                                        value: "mediumorchid",
                                        children: "Medium orchid"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("button", {
                        style: {
                            backgroundColor: theme
                        },
                        className: "search-control rounded px-6 py-2 text-white hover:opacity-50 border-none",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)((0, $B45GO.default), {
                pets: pets
            })
        ]
    });
}
var $243066060ef4ad3f$export$2e2bcd8739ae039 = $243066060ef4ad3f$var$SearchParams;

});
parcelRequire.register("B45GO", function(module, exports) {

$parcel$export(module.exports, "default", () => $06f6a128231dfdb9$export$2e2bcd8739ae039);


var $eoUXL = parcelRequire("eoUXL");

function $06f6a128231dfdb9$var$Results(props) {
    // destructuring props to extract a key
    const { pets: pets  } = props; //   console.log(pets);
    return /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("div", {
        className: "search grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2",
        children: !pets.length ? /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("h2", {
            children: "No pets found"
        }) : pets.map((pet)=>/*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)((0, $eoUXL.default), {
                name: pet.name,
                animal: pet.animal,
                breed: pet.breed,
                images: pet.images,
                location: `${pet.city}, ${pet.state}`,
                id: pet.id
            }, pet.id))
    });
}
var $06f6a128231dfdb9$export$2e2bcd8739ae039 = $06f6a128231dfdb9$var$Results;

});
parcelRequire.register("eoUXL", function(module, exports) {

$parcel$export(module.exports, "default", () => $a7bf7e350f34d6f5$export$2e2bcd8739ae039);




const $a7bf7e350f34d6f5$var$Pet = (props)=>{
    const { name: name , animal: animal , breed: breed , images: images , location: location , id: id  } = props;
    let hero = images.length ? `${images[0]}` : `http://pets-images.dev-apis.com/pets/none.jpg`;
    return /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)((0, $72EGm$reactrouterdom.Link), {
        to: `/details/${id}`,
        className: "pet relative block",
        children: [
            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("img", {
                    src: hero,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsxs)("div", {
                className: "info absolute w-full bottom-0 left-0 bg-gradient-to-tr from-white to-transparent px-2 py-2",
                children: [
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("h1", {
                        children: name
                    }),
                    /*#__PURE__*/ (0, $72EGm$reactjsxruntime.jsx)("h2", {
                        children: `${animal} - ${breed} - ${location}`
                    })
                ]
            })
        ]
    });
};
var $a7bf7e350f34d6f5$export$2e2bcd8739ae039 = $a7bf7e350f34d6f5$var$Pet;

});


parcelRequire.register("95T92", function(module, exports) {

$parcel$export(module.exports, "default", () => $69ef5b43ec980c7d$export$2e2bcd8739ae039);

const $69ef5b43ec980c7d$var$localCache = {}; // passing down animal props to our custom hook
// our custom hook will use other built-in hooks
function $69ef5b43ec980c7d$var$useBreedList(animal) {
    const [breedList, setBreedList] = (0, $72EGm$react.useState)([]);
    const [status, setStatus] = (0, $72EGm$react.useState)("unloaded");
    (0, $72EGm$react.useEffect)(()=>{
        if (!animal) // when there is no animal
        setBreedList([]); // empty breedlist
        else if ($69ef5b43ec980c7d$var$localCache[animal]) // if animal is in cache
        // load from there.
        setBreedList($69ef5b43ec980c7d$var$localCache[animal]);
        else // making a quest to an API to fetch fresh breedlist.
        requestBreedList();
         // async function to fetch data from API
        async function requestBreedList() {
            setBreedList([]); // emptying breedList
            setStatus("loading"); // status is loading.
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            $69ef5b43ec980c7d$var$localCache[animal] = json.breeds || [];
            setBreedList($69ef5b43ec980c7d$var$localCache[animal]);
            setStatus("loaded");
        }
    }, [
        animal
    ]); // animal is a prop, based on which the effect will run.
    // custom hook will return the following array
    return [
        breedList,
        status
    ];
}
var $69ef5b43ec980c7d$export$2e2bcd8739ae039 = $69ef5b43ec980c7d$var$useBreedList;

});



//# sourceMappingURL=SearchParams.0c641cf5.js.map
