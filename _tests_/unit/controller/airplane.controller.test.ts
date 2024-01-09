// import { Test, TestingModule } from '@nestjs/testing';
// import { AirplaneController } from '../../../src/airplane/airplane.controller';
// import { AirplaneService } from '../../../src/airplane/airplane.service';


// describe('AirplaneController', () => {
//   let airplaneController : AirplaneController;
//   let airplaneService: AirplaneService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AirplaneController],
//       providers: [AirplaneService],
//     }).compile();

//     airplaneController = module.get<AirplaneController>(AirplaneController);
//     airplaneService = module.get<AirplaneService>(AirplaneService)
//   });

//   describe('get all users', () => {
//     it("should return all users",async()=>{
//       try{
//         let response=[{
//           userid: 1,
//           firstname: null,
//           lastname: null,
//           email: 'abc12@gmail.com',
//           phonenumber: '9898765643'
//         }];
//         jest.spyOn(airplaneService,"getUser").mockImplementation(async()=> response)
//         //const data = await airplaneController.getUser();
//         expect(airplaneService.getUser).toHaveBeenCalled();
//         //expect(data).toBe(response)
//       }
//       catch(error){
//         console.log(error)
//       }
//     })
//   });
// });
