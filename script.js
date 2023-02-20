console.log('Pendo-test');




// This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
// This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
// Call this function in your authentication promise handler or callback when your visitor and account id values are available
// Please use Strings, Numbers, or Bools for value types.
pendo.initialize({
	visitor: {
		id:              '_PENDO_T_Jf4Y8ajJBK7'   // Required if user is logged in, default creates anonymous ID
		// email:        // Recommended if using Pendo Feedback, or NPS Email
		// full_name:    // Recommended if using Pendo Feedback
		// role:         // Optional

		// You can add any additional visitor level key-values here,
		// as long as it's not one of the above reserved names.
	},

	account: {
		id:           'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
		// name:         // Optional
		// is_paying:    // Recommended if using Pendo Feedback
		// monthly_value:// Recommended if using Pendo Feedback
		// planLevel:    // Optional
		// planPrice:    // Optional
		// creationDate: // Optional

		// You can add any additional account level key-values here,
		// as long as it's not one of the above reserved names.
	}
});
