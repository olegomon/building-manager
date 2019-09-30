# Demo

A running demo has been deployed to GitHub pages. Click on the link below to see the demo. 
[https://olegomon.github.io/building-manager](https://olegomon.github.io/building-manager/) 

# Overall UI design considerations

My initial mockup screens has been made with Balsamiq to demonstrate most important usability aspects of the editor.
Potential area for displaying building rooms is within the sidebar below the building information which you 
can see on the last slide of the mockup. 
  
During development the concept has been further refined. 

- "Delete" and "Add" buttons are disabled when the input field is invalid
- "Save" button is disabled if one of the input fields are invalid
- All input fields and the "Save" are disabled if the use is about to add a new nickname 

For simplicity, no mockups has been made to demonstrate the layout for smaller screens.

You can find the Balsamiq mockup in the root folder of the project `docs/ui-mockup-building-manager.pdf`

# Design decisions of components

`NicknameEditorComponent` component is independent of any services directly. Instead it can be configured by passing 
any validators and nickname values through input properties. The interaction with the component is handled through events 
to handle deletion, creation and saving of the nickname values and to keep the unidirectional data flow between 
the parent and child components. Same concepts has been applied to the `NicknameFactoryComponent` child component as 
well as for the `BuildingDetailComponent`

With little adjustments, this the component can be easily used to edit nicknames for the building rooms in future development.

