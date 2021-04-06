import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {

  it('should be able to create a new user', async () => {

    const fakeMailProvider = new FakeMailProvider();
    const fakeUsersRepository = new FakeUsersRepository();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const SendForgotPasswordEmail = new SendForgotPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });

    await SendForgotPasswordEmail.execute({ email: 'johndoe@example.com' });

    expect(sendMail).toHaveBeenCalled();

  });

});
