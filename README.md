## Property Enumeratio 

This web application will be used to enumerate all the properties and usage categories within a particular area.

Current version under

http://baseline-64838.onmodulus.net/listProperty

User:

joerg@meteorfactory.io
12345678


 
 LGA -> Local Government Area
 Ward -> District within that City

###Description

The app is to be used for the **enumeration of properties** within an area that is divided into LGAs and each LGA is made up of Wards. The unit of enumeration is a **Property** which will have _identification, an owner name, address particulars etc_. Each Property can have **many components** which can be put to several uses. These **usages** are what we denote as **Categories**. We can have a block of Flats, a row of shops and businesses and other combinations. As an example, I have a 2-story building with the top floor used as residential accommodation, the middle floor used as a hospital and the ground floor used as a restaurant. This means that the property will be enumerated with 3 categories, the Residential Category to cover the top floor used for residential accommodation, the Medical Category to cover the middle floor used as a hospital and an Entertainment Category to cover the ground floor used a a restaurant.

The **enumeration of the various Categories** will contain information of the individuals or businesses that are housed in that component unit of property. This is what we have in the insertCategories form. Each of these categories will also have **identification**. For the identification, I think that the mongoDb ID is okay. There is a **yearly fee associated with each category**. So, when a category is selected, the fee associated with this category will be displayed. We should be able to print notices to the occupants of the unit of property that they ought to pay the specified amount. This is the **Demand Notice** and the schedule for the payment is what I sent previously (Property usage categories https://goo.gl/BVXO6V). **Payments** can be made through the bank and on installments. Therefore we need to have a means of knowing who pays what, when, where and how much is paid. That way, we can have a history of transaction for each category of building. 

We should also be able to have an idea of the **total amounts** paid at any particular time by any of the categories of property. Example, if the residential category has paid 10,000 naira, I should see that on the dashboard. The same is applicable to other categories.
When a Property is enumerated, we want to have a visual of the property in google map. This is the essence of including the location object in the form. When the View-In-Map button is clicked, it should give us the location of the property in the goole map.

The process of enumerating a property is this:

1.	You complete the insertProperty form.
2.	On submitting this form, you will be prompted to insert the various categories that belong to that particular property. 
3.	After completing a category, you will be prompted to complete another category until you have completed the forms for all the categories belonging to that particular property. 
4.	Assuming that you missed completing a category, you can use the Property ID to pull up the particular property and add the missed category.

We should have a means of listing all the properties that have been enumerated and also perform a text search through the list.

**Tax / Utility fees**

I forgot to include this earlier. There is **fees associated with each Property**. This fees are to be paid by the owner of the property, not the clients in the property. This means that it is not associated with the categories of the property. These fees are the Property Tax and the Fire Service Utility Bill. We should have a transaction history for these fees as well as a means of generating Demand Notice for payment of these fees.

** Two kind of fees (Property use bases on categories and tax/utility)**

For properties, there are two demand notices. One is to be paid by the Owner and the other by the Occupants. The demand notice for the Owner will be in respect of Property Tax and Fire Service Utility Bill. The one for the Occupants is be in respect of the payments listed according to the categories of property unit of the Occupant. 

The demand notice is to be paid in the bank. The occupant gets the demand notice and goes to the bank to make a deposit. After making the deposit, he comes back to the office with a bank teller. The staff then takes the bank teller and pulls up the details of the occupant using his/her ID and enters the details contained in the teller into the payment details array. An example of this is http://autoform.meteorapp.com/update-array-item. But in this case, the array to be updated is the payment details for the demand notice. 

Payments must be made through the bank. But an occupant may decide not to pay the full amount once. He can decide to pay a fraction of the amount now and the other fraction at another time. That is what I mean.


**Users**

The app is not going to be used by the owners of the property. The owner of the property will not be entering the data by themselves. There won’t be a lot of different users. The data to be entered is going to be generated by physical enumeration.  The app is going to be used by the staffs of the enumeration firm. In this regards, the number of users will be quite small. These will be created by the admin of the app. 



**Responsive design**

Responsive design should come by default. If implementing it would increase the budget then we have to shelve it. It is not an extreme necessity that the app must be used in a mobile device. 

-> Although right now we even have problems to display all values in the long tables on a desktop screen. Switching from the table view to a stacked Elements view would make sense



### Documents

**List of first 6 tasks**

https://goo.gl/bUpyuy

**List of LGAs and Wards**
 
 https://docs.google.com/spreadsheets/d/1yKOdnelwHaPjUtNieL1n_fixeGaN5uRvDNGoU_Bfj4g/edit#gid=0

**Property usage categories**

https://docs.google.com/spreadsheets/d/1FlqmRl24sv67Eydn2YHnb-qKlIjiEkEwmI8jo_XVOwQ/edit#gid=0

https://goo.gl/BVXO6V

### Organizational

**Hours**

https://docs.google.com/spreadsheets/d/1XNe8r3AKXdtDL0I2QXVT-294lmO28RIqVhZJn3VK8G0/edit#gid=1820830577

**Trello**

https://trello.com/b/n1VARFkm/property-enumeratio


**Deployment**

http://baselineapp-60405.onmodulus.net/

Modulus Account

lawnwezza 
PW: egwudinagu1972






