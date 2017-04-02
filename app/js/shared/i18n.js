function translateProvider($translateProvider){
		$translateProvider.translations('en', {
			title: 'Farmworkers Safety Application',
		    landing:{
			    username_label: 'Phone Number',
			    password_label: 'Password',
			    btn_login: 'Login',
			    btn_register: 'Register',
				btn_forgetpassword: 'Request new password'
			},
			register:{
			    email_label: 'Email',
			    email_required: 'Email is required.',
			    phone_label: 'Phone',
			    phone_required: 'Phone is required.',
			    password_label: 'Password',
			    password_required: 'Password is required.',
		      	confirm_password_label: 'Confirm Password',
			    confirm_password_required: 'Confirm password is required.',
			    confirm_password_mismatched: 'Confirm password is mismatched.',
			    fname_label: 'First Name',
			    lname_label: 'Last Name',
			    btn_submit: 'Submit',
			    offer_title: 'Farmworkers Safety Application offers you: ',
			    offer_1: 'Temperature based notification',
			    offer_2: 'Educational content to educate the farmers',
			    offer_3: 'Easy to use',
			    offer_4: 'The fourth one'
			},
			
			profile: {
				view: {
					registered_farm_label: "Register Farm",
					farm_address_label: "Farm's Address",
					farm_temperature_label: "Farm Temperature",
					phone_label: "Phone Number",
					email_label: "Email",
					birthdate_label: "Date of Birth",
					gender_label: "Gender",
					weight_label: "Weight",
					height_label: "Height",
					completed_edu_content_label: "Completed quizzes",
					completed_quiz_label: "Completed Educational content"
				},
				update:{
					phone_label: "Phone Number",
					email_label: "Email",
					birthdate_label: "Date of Birth",
					gender_label: "Gender",
					gender_required: "Gender is required.",
					weight_label: "Weight",
					height_label: "Height",
					email_label: 'Email',
				    email_required: 'Email is required.',
				    phone_label: 'Phone',
				    phone_required: 'Phone is required.',
				    password_label: 'Password',
				    password_required: 'Password is required.',
				    confirm_password_label: 'Confirm Password',
				    confirm_password_required: 'Confirm password is required.',
				    confirm_password_mismatched: 'Confirm password is mismatched.',
				    fname_label: 'First Name',
				    fname_required: 'First Name is required.',
				    lname_label: 'Last Name',
				    lname_required: 'Last Name is required.',
				    farm_select_label: 'Choose Farm',
				    farm_select_required: 'Farm must be chosen',
				    noti_pref_label: 'Notification Preference',
				    schedule_pref_label: 'Scheduling Preference',
				    btn_update: 'Update',
				    btn_cancel: 'Cancel',
				},
				update_farm: {
					farm_select_label: 'Choose Farm',
				    farm_select_required: 'Farm must be chosen',
					farm_name_label: "Register Farm",
					farm_address_label: "Farm's Address",
				    btn_update: 'Update',
				    btn_cancel: 'Cancel',
				}
			},
			admin:{
				landing:{
					farmworker_count_label: "Number of Farmworkers",
					farm_count_label: "Number of Farms",
					video_count_label: "Number of Videos",
					document_count_label: "Number of Documents",
					quiz_count_label: "Number of Quizs"
				},
				farmworker:{
					search_email_label: "Search by Email",
					search_phone_label: "Search by Phone Number",
					search_name_label: "Search by Name",
					btn_search: "Search",
					btn_back_to_result: "Back to Result",
					
				},
				farmowner:{
					search_email_label: "Search by Email",
					search_phone_label: "Search by Phone Number",
					search_name_label: "Search by Name",
					btn_search: "Search",
					btn_back_to_result: "Back to Result",
					
				},
				farm:{
					owner_label: "Farm Owner Name",
					owner_email_label: "Farm Owner Email",
					farm_name_label: "Farm Name",
					farm_address_label: "Farm Address",
					farm_city_label: "City",
					farm_zipcode_label: "Zip Code",
					farm_phone_label: "Phone Number",
					farm_emergency_phone_label: "Emergency Phone Number",
					farm_emergency_phone_hint: "(If the region of the farm has seperate Emergency)",
					btn_submit: "Submit"
				},
				education:{
					document:{
						upload_title: "Upload New Document",
						existing_title: "Existing Documents",
						btn_add: "Add",
						btn_edit: "Edit",
						btn_delete: "Delete",
						btn_disable: "Disable",
						btn_enable: "Enable",
						btn_update: "Update",
						btn_cancel_update: "Cancel"
					},
					video:{
						upload_title: "Upload New Video",
						existing_title: "Existing Videos",
						btn_add: "Add",
						btn_edit: "Edit",
						btn_delete: "Delete",
						btn_disable: "Disable",
						btn_enable: "Enable",
						btn_update: "Update",
						btn_cancel_update: "Cancel"
					},
					quiz:{
						upload_title: "Upload New Quiz",
						existing_title: "Existing Quizzes",
						btn_add: "Add",
						btn_create_quiz: "Create Quiz",
						btn_edit: "Edit",
						btn_delete: "Delete",
						btn_update: "Update",
						btn_cancel_update: "Cancel"
					}
				}
			}
		});
		$translateProvider.translations('es', {
		   title: 'Farmworkers Safety Application ES',
		    landing:{
			    username_label: 'Username ES',
			    password_label: 'Password ES',
			    btn_login: 'Login ES',
			    btn_register: 'Register ES'
			},
			register:{
			    email_label: 'Email ES',
			    email_required: 'Email is required. ES',
			    phone_label: 'Phone ES',
			    phone_required: 'Phone is required. ES',
			    password_label: 'Password ES',
			    password_required: 'Password is required. ES',
		      	confirm_password_label: 'Confirm Password ES',
			    confirm_password_required: 'Confirm password is required. ES',
			    confirm_password_mismatched: 'Confirm password is mismatched. ES',
			    fname_label: 'First Name ES',
			    lname_label: 'Last Name ES',
			    btn_submit: 'Submit ES',
			    offer_title: 'Farmworkers Safety Application offers you:  ES',
			    offer_1: 'Temperature based notification ES',
			    offer_2: 'Educational content to educate the farmers ES',
			    offer_3: 'Easy to use ES',
			    offer_4: 'The fourth one ES'
			},
			
			profile: {
				view: {
					registered_farm_label: "Register Farm ES",
					farm_address_label: "Farm's Address ES",
					farm_temperature_label: "Farm Temperature ES",
					phone_label: "Phone Number ES",
					email_label: "Email ES",
					birthdate_label: "Date of Birth ES",
					gender_label: "Gender ES",
					weight_label: "Weight ES",
					height_label: "Height ES",
					completed_edu_content_label: "Completed quizzes ES",
					completed_quiz_label: "Completed Educational content ES"
				},
				update:{
					phone_label: "Phone Number ES",
					email_label: "Email ES",
					birthdate_label: "Date of Birth ES",
					gender_label: "Gender ES",
					gender_required: "Gender is required. ES",
					weight_label: "Weight ES",
					height_label: "Height ES",
					email_label: 'Email ES',
				    email_required: 'Email is required. ES',
				    phone_label: 'Phone ES',
				    phone_required: 'Phone is required. ES',
				    password_label: 'Password ES',
				    password_required: 'Password is required. ES',
				    confirm_password_label: 'Confirm Password ES',
				    confirm_password_required: 'Confirm password is required. ES',
				    confirm_password_mismatched: 'Confirm password is mismatched. ES',
				    fname_label: 'First Name ES',
				    fname_required: 'First Name is required. ES',
				    lname_label: 'Last Name ES',
				    lname_required: 'Last Name is required. ES',
				    farm_select_label: 'Choose Farm ES',
				    farm_select_required: 'Farm must be chosen ES',
				    noti_pref_label: 'Notification Preference ES',
				    schedule_pref_label: 'Scheduling Preference ES',
				    btn_update: 'Update ES',
				    btn_cancel: 'Cancel ES',
				}
			},
			admin:{
				farmworker:{
					search_email_label: "Search by Email ES",
					search_phone_label: "Search by Phone Number ES",
					search_name_label: "Search by Name ES",
					btn_search: "Search ES",
				},
				farm:{
					owner_label: "Farm Owner Name ES",
					owner_email_label: "Farm Owner Email ES",
					farm_name_label: "Farm Name ES",
					farm_address_label: "Farm Address ES",
					farm_city_label: "City ES",
					farm_zipcode_label: "Zip Code ES",
					farm_phone_label: "Phone Number ES",
					farm_emergency_phone_label: "Emergency Phone Number ES",
					farm_emergency_phone_hint: "(If the region of the farm has seperate Emergency) ES",
					btn_submit: "Submit ES"
				},
				education:{
					document:{
						upload_title: "Upload New Document ES",
						existing_title: "Existing Documents ES",
						btn_add: "Add ES",
						btn_edit: "Edit ES",
						btn_delete: "Delete ES",

					},
					video:{
						upload_title: "Upload New Video ES",
						existing_title: "Existing Videos ES",
						btn_add: "Add ES",
						btn_edit: "Edit ES",
						btn_delete: "Delete ES"

					},
					quiz:{
						upload_title: "Upload New Quiz ES",
						existing_title: "Existing Quizzes ES",
						btn_add: "Add ES",
						btn_create_quiz: "Create Quiz ES",
						btn_edit: "Edit ES",
						btn_delete: "Delete ES",

					}
				}
			}
		 });
	    $translateProvider.preferredLanguage('en');
}
angular.module("angularApp").config(translateProvider);