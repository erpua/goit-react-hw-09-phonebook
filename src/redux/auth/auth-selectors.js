/* const getIsLoggedIn = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
 */

const getIsLoggedIn = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
};
export default authSelectors;
