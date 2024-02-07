
To-do’s feature 

These features are just proof of concept and do not cover all to-do features like notification etc.
And this feature is not storing any data to database when you restart express server all data rollback to initial data below

_todoList = [
    { id: 1, title: 'example todo 1', detail: 'example detail 1', status: 'done' },
    { id: 2, title: 'example todo 2', detail: 'example detail 2', status: 'pending' },
    { id: 3, title: 'example todo 3', detail: 'example detail 3', status: 'pending' }
];

 

Below api are tested 
- Get method by any web browser
- Post method by Postman client 


How to start Express server

1.) Open nodejs server

2.) Run “npm install” in the console.
3.) Run “nodemon start” in the console, to start the express server.
![2024-02-07 12 16 17](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/360ae4c9-8a78-4531-933e-c92b957d91c6)

4.) Now you can call api by web browser or any httpClient tool.  


APIs below are available.

1. Get list all of To-do’s by http://localhost:9000/todo-list 

![2024-02-07 12 16 17](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/43ddfe4d-efd7-43d5-856b-905c2fdcda2d)

2. Get single Todo by http://localhost:9000/todo?id=1  

   ![3](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/1094e9a6-5744-4da3-bcc9-ac44d302187a)

   
3. Add new To-do by Use httpClient post to http://localhost:9000/todo

  Below are parameters needed
  1.”title” is an to-do title
  2. “detail” is an to-do detail
  3. Param id is not needed for this request.

  ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/0a1e5f19-36e1-4710-bc6c-7438c9d0c24d)
 
  New record return as below.
  
  ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/713fef20-1c04-4904-8068-cf58672a4cab)


4. To update existing to-do post data to Api http://localhost:9000/todo
  With parameters below
  Param “title” for todo title
  Param “detail” for todo detail
  Param “id” for specific id to be update
  Param “status” for update new to-do status.


  ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/6a7864c4-3a35-4c47-acfc-bd7c25127581)

  The output should look like below.

  ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/7cf3213d-8e13-48da-a30c-db45ea7f638b)




5. To delete specific to-do post data to api http://localhost:9000/delete
		With below parameter needed
    1. Param “id” is a to-do id to be deleted.

    ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/d9cc81f3-bc01-4a2d-bfe1-7472e2f1e67c)

  The output should look like below. 
  
  ![image](https://github.com/PlanktonBkk/bdms-test-backend/assets/61401107/4fc29cde-18cc-475a-a5f2-ad56ccaef082)



