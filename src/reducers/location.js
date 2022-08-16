/**
Actions are the only source of information for the store as per Redux official documentation. It carries a payload of information from your application to store.

As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.

Payload is a non-official, community accepted (de facto) naming convention for the property that holds the actual data in a Redux action object.
 */
export default function location(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
}
