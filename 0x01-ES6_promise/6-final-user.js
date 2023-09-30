import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userResult = await signUpUser(firstName, lastName);
    const photoResult = await uploadPhoto(fileName);

    return [
      {
        user: {
          firstName: userResult.firstName,
          lastName: userResult.lastName,
        },
        photo: {
          filename: photoResult.filename,
        },
      },
    ];
  } catch (error) {
    return [
      {
        error: error.message, // You can customize this part to handle errors as needed.
      },
    ];
  }
}
