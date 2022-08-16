var $iRnDH$express = require("express");
var $iRnDH$reactdomserver = require("react-dom/server");
var $iRnDH$reactrouterdomserver = require("react-router-dom/server");
var $iRnDH$fs = require("fs");
var $iRnDH$reactjsxruntime = require("react/jsx-runtime");
var $iRnDH$react = require("react");
var $iRnDH$reactrouterdom = require("react-router-dom");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireaddb"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireaddb"] = parcelRequire;
}
parcelRequire.register("63urM", function(module, exports) {
module.exports = Promise.resolve(require("./Modal.b35764a5.js")).then(()=>parcelRequire("7A7f2"));

});







// createContext is a function that returns an object with two React components in it: a Provider and a Consumer.
// we're actually passing a value and a function like  what useState returns.
const $03fbcb125d23c9ac$var$ThemeContext = /*#__PURE__*/ (0, $iRnDH$react.createContext)([
    "green",
    ()=>{}
]);
var $03fbcb125d23c9ac$export$2e2bcd8739ae039 = $03fbcb125d23c9ac$var$ThemeContext;







const $a7bf7e350f34d6f5$var$Pet = (props)=>{
    const { name: name , animal: animal , breed: breed , images: images , location: location , id: id  } = props;
    let hero = images.length ? `${images[0]}` : `http://pets-images.dev-apis.com/pets/none.jpg`;
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $iRnDH$reactrouterdom.Link), {
        to: `/details/${id}`,
        className: "pet relative block",
        children: [
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                    src: hero,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                className: "info absolute w-full bottom-0 left-0 bg-gradient-to-tr from-white to-transparent px-2 py-2",
                children: [
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h1", {
                        children: name
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h2", {
                        children: `${animal} - ${breed} - ${location}`
                    })
                ]
            })
        ]
    });
};
var $a7bf7e350f34d6f5$export$2e2bcd8739ae039 = $a7bf7e350f34d6f5$var$Pet;



function $06f6a128231dfdb9$var$Results(props) {
    // destructuring props to extract a key
    const { pets: pets  } = props; //   console.log(pets);
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
        className: "search grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2",
        children: !pets.length ? /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h2", {
            children: "No pets found"
        }) : pets.map((pet)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $a7bf7e350f34d6f5$export$2e2bcd8739ae039), {
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



const $69ef5b43ec980c7d$var$localCache = {}; // passing down animal props to our custom hook
// our custom hook will use other built-in hooks
function $69ef5b43ec980c7d$var$useBreedList(animal) {
    const [breedList, setBreedList] = (0, $iRnDH$react.useState)([]);
    const [status, setStatus] = (0, $iRnDH$react.useState)("unloaded");
    (0, $iRnDH$react.useEffect)(()=>{
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




const $243066060ef4ad3f$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
function $243066060ef4ad3f$var$SearchParams() {
    const [location, setLocation] = (0, $iRnDH$react.useState)("");
    const [animal1, setAnimal] = (0, $iRnDH$react.useState)("");
    const [breed1, setBreed] = (0, $iRnDH$react.useState)(""); // pets will hold an array with all the pets comming from API.
    const [pets, setPets] = (0, $iRnDH$react.useState)([]); // useBreedList is a custom hook.
    const [breeds] = (0, $69ef5b43ec980c7d$export$2e2bcd8739ae039)(animal1); // In order to use the Context in a child component, we need to access it using the useContext Hook.
    // as we sent an array, therefore destructuring the array.
    const [theme, setTheme] = (0, $iRnDH$react.useContext)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039));
    (0, $iRnDH$react.useEffect)(()=>{
        requestPets();
    }, []); // async function to get data from API endpoint
    async function requestPets() {
        // response of the fetch request
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed1}`); // takes a response and parsing the body text as JSON
        const json = await response.json(); // console.log(json.pets);
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
        className: "search-params my-0 mx-auto px-0 w-11/12",
        children: [
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("form", {
                className: "search-params p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900",
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                },
                children: [
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "location",
                        className: "search-label",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("input", {
                                className: "search-control block",
                                id: "location",
                                onChange: (e)=>setLocation(e.target.value),
                                value: location,
                                placeholder: "Location"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "animal",
                        className: "search-label",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("select", {
                                className: "search-control block",
                                id: "animal",
                                value: animal1,
                                onChange: (e)=>setAnimal(e.target.value),
                                onBlur: (e)=>setAnimal(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {}),
                                    $243066060ef4ad3f$var$ANIMALS.map((animal)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "breed",
                        className: "search-label",
                        children: [
                            "breed",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("select", {
                                className: "search-control disabled:opacity-50 block",
                                disabled: !breeds.length,
                                id: "breed",
                                value: breed1,
                                onChange: (e)=>setBreed(e.target.value),
                                onBlur: (e)=>setBreed(e.target.value),
                                children: breeds.map((breed)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: breed,
                                        children: breed
                                    }, breed))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "theme",
                        className: "search-label",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("select", {
                                className: "search-control block",
                                value: theme,
                                onChange: (e)=>setTheme(e.target.value),
                                onBlur: (e)=>setTheme(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "darkblue",
                                        children: "Dark Blue"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "chartreuse",
                                        children: "Chartreuse"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "mediumorchid",
                                        children: "Medium orchid"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("button", {
                        style: {
                            backgroundColor: theme
                        },
                        className: "search-control rounded px-6 py-2 text-white hover:opacity-50 border-none",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $06f6a128231dfdb9$export$2e2bcd8739ae039), {
                pets: pets
            })
        ]
    });
}
var $243066060ef4ad3f$export$2e2bcd8739ae039 = $243066060ef4ad3f$var$SearchParams;









function $03204dbe2679e6fd$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $03204dbe2679e6fd$export$2e2bcd8739ae039 extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $03204dbe2679e6fd$var$_defineProperty(this, "state", {
            active: 0
        });
        $03204dbe2679e6fd$var$_defineProperty(this, "handleIndexClick", (event)=>{
            // console.log(+event.target.dataset.index);
            this.setState({
                // event.target.dataset.index will target the data-index value of the image, that was clicked.
                // The data attribute comes back as a string. We want it to be a number, hence the +
                active: +event.target.dataset.index
            });
        });
    }
    render() {
        // destructuring our state.
        const { active: active  } = this.state; // destructuring our props that's comming from the parent component.
        // we will be passing down images prop
        // from Details to Carousels component.
        const { images: images , name: name  } = this.props;
        console.log(this.props);
        return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
            className: "carousel grid grid-cols-1 gap-4 px-9",
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                    src: images[active],
                    alt: name,
                    className: "w-2/3 h-[400px] object-cover object-center mx-auto rounded border-2 border-black"
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
                    className: "w-2/3 mx-auto carousel-smaller flex flex-wrap justify-center items-center",
                    children: images.map((photo, index)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                            src: photo,
                            "data-index": index,
                            onClick: this.handleIndexClick,
                            className: index === active ? "active w-1/5 rounded-full p-2 border-2 border-black" : "w-1/5 rounded-full p-2 border-2 border-white",
                            alt: "animal thumbnail"
                        }, photo))
                })
            ]
        });
    }
}
$03204dbe2679e6fd$var$_defineProperty($03204dbe2679e6fd$export$2e2bcd8739ae039, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ],
    name: "animal"
});







function $e1f82cc8fe3cafbe$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $e1f82cc8fe3cafbe$export$2e2bcd8739ae039 extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $e1f82cc8fe3cafbe$var$_defineProperty(this, "state", {
            hasError: false,
            redirect: false
        });
    }
    /**
   * The getDerivedStateFromError() method is invoked if some error occurs during the rendering phase.
   *  It is called during the render phase, so side-effects are not permitted in this method. For side-effects, we use componentDidCatch() instead.
   *
   */ static getDerivedStateFromError() {
        // Changing the state hasError to true if some error occurs.
        return {
            hasError: true
        };
    }
    // unlike getDerivedStateFromError() side-effects are allowed in this method.
    componentDidCatch(error, info) {
        console.error("ErrorBoundery caught an error.", error, info);
    }
    componentDidUpdate() {
        if (this.state.hasError) setTimeout(()=>{
            this.setState({
                redirect: true
            });
        }, 5000);
    }
    render() {
        if (this.state.redirect) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Navigate), {
            to: "/"
        });
        else if (this.state.hasError) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h2", {
            children: [
                "There was an error with this listing. ",
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Link), {
                    to: "/",
                    children: "Click here"
                }),
                " ",
                "to back to the home page or wait five seconds."
            ]
        });
        return this.props.children;
    }
}





function $aad846fad629fe8b$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

const $aad846fad629fe8b$var$Modal = /*#__PURE__*/ (0, $iRnDH$react.lazy)(()=>(parcelRequire("63urM")));
class $aad846fad629fe8b$var$Details extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $aad846fad629fe8b$var$_defineProperty(this, "state", {
            loading: true,
            showModal: false
        });
        $aad846fad629fe8b$var$_defineProperty(this, "toggleModal", ()=>{
            this.setState({
                showModal: !this.state.showModal
            });
        });
        $aad846fad629fe8b$var$_defineProperty(this, "adopt", ()=>window.location = "http://bit.ly/pet-adopt");
    }
    // }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json(); // setting new state values
        // json.pets[0] will hold an object with all keys and values.
        this.setState(Object.assign({
            loading: false
        }, json.pets[0]));
    }
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h2", {
            children: "loading \u2026 "
        });
        const { animal: animal , breed: breed , city: city , state: state , description: description , name: name , images: images , showModal: showModal  } = this.state;
        return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
            className: "details",
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $03204dbe2679e6fd$export$2e2bcd8739ae039), {
                    images: images,
                    name: name
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                    className: "text-center px-9",
                    children: [
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h1", {
                            className: "text-6xl",
                            children: name
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h2", {
                            className: "text-3xl",
                            children: `${animal} - ${breed} - ${city}, ${state}`
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039).Consumer, {
                            children: ([theme])=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("button", {
                                    onClick: this.toggleModal,
                                    className: "btn w-1/6 p-5 rounded-md my-4 text-white hover:text-zinc-300",
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("p", {
                            className: "w-1/2 mx-auto text-justify mb-10",
                            children: description
                        }),
                        showModal ? /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)($aad846fad629fe8b$var$Modal, {
                            children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                                className: "bg-white px-[200px] py-[100px] rounded-lg drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h1", {
                                        className: "text-2xl mb-5",
                                        children: [
                                            "Would you like to adopt ",
                                            name,
                                            " ?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                                        className: "buttons flex ",
                                        children: [
                                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mr-2",
                                                onClick: this.adopt,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 ml-2",
                                                onClick: this.toggleModal,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
} // higher order component and returning Details component.
const $aad846fad629fe8b$var$WrappedDetails = ()=>{
    // using useparams hook
    const params = (0, $iRnDH$reactrouterdom.useParams)(); // adding params prop
    // params is the value
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $e1f82cc8fe3cafbe$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)($aad846fad629fe8b$var$Details, {
            params: params
        })
    });
};
var $aad846fad629fe8b$export$2e2bcd8739ae039 = $aad846fad629fe8b$var$WrappedDetails;





const $68331e6bae88c443$var$App = ()=>{
    const theme = (0, $iRnDH$react.useState)("darkblue");
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$react.StrictMode), {
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039).Provider, {
            value: theme,
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("header", {
                    children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Link), {
                        to: "/",
                        children: "Adopt Me!"
                    })
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $iRnDH$reactrouterdom.Routes), {
                    children: [
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Route), {
                            path: "/details/:id",
                            element: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $aad846fad629fe8b$export$2e2bcd8739ae039), {})
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Route), {
                            path: "/",
                            element: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $243066060ef4ad3f$export$2e2bcd8739ae039), {})
                        })
                    ]
                })
            ]
        })
    });
};
var $68331e6bae88c443$export$2e2bcd8739ae039 = $68331e6bae88c443$var$App;



const $1e2dbfa8b3df4ac0$var$PORT = process.env.PORT || 3000;
const $1e2dbfa8b3df4ac0$var$html = (0, ($parcel$interopDefault($iRnDH$fs))).readFileSync("dist/frontend/index.html").toString();
const $1e2dbfa8b3df4ac0$var$parts = $1e2dbfa8b3df4ac0$var$html.split("not rendered");
const $1e2dbfa8b3df4ac0$var$app = (0, ($parcel$interopDefault($iRnDH$express)))();
$1e2dbfa8b3df4ac0$var$app.use("/frontend", (0, ($parcel$interopDefault($iRnDH$express))).static("dist/frontend"));
$1e2dbfa8b3df4ac0$var$app.use((req, res)=>{
    const reactMarkup = /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdomserver.StaticRouter), {
        location: req.url,
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $68331e6bae88c443$export$2e2bcd8739ae039), {})
    });
    res.send(`${$1e2dbfa8b3df4ac0$var$parts[0]}${(0, $iRnDH$reactdomserver.renderToString)(reactMarkup)}${$1e2dbfa8b3df4ac0$var$parts[1]}`);
    res.end();
});
console.log(`listening on http://localhost:${$1e2dbfa8b3df4ac0$var$PORT}`);
$1e2dbfa8b3df4ac0$var$app.listen($1e2dbfa8b3df4ac0$var$PORT);


//# sourceMappingURL=index.js.map
