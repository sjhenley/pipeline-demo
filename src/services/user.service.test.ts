import { v4 as uuidv4 } from 'uuid';
import User from '../models/user';
import userService from './user.service';
import userDAO from '../repositories/user.repository';

describe('Within userSerivce module:', () => {
  describe('login', () => {
    test('should successfully login when provided valid credentials', async () => {
      const username = 'test username';
      const password = 'test password';
      const mockUser = new User(username, password, 'Customer', 'some address', '8675309', uuidv4());
      jest.spyOn(userDAO, 'getByUsername').mockResolvedValueOnce(mockUser);

      await expect(userService.login(username, password)).resolves.toBe(mockUser);
    });
  });
});
