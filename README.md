# eslint-config-typescript

## Installation

1. Create `.npmrc` on the top-directory of your project
   ```
   //npm.pkg.github.com/:_authToken=${GITHUB_READ_PACKAGES_TOKEN}
   @pres-inc:registry="https://npm.pkg.github.com"
   ```
2. Go to https://github.com/settings/tokens/new
3. Check `read:packages`
4. Click `Generate token`
5. Copy the generated personal token
6. Export the token as an environment variable
   ```bash
   $ export GITHUB_READ_PACKAGES_TOKEN=your_token
   ```
8. Run the install command
   ```bash
   $ npm install -D @pres-inc/eslint-config-typescript
   ```

## Usage

`.eslintrc.yaml`

```yaml
extends:
  - "@pres-inc/eslint-config-typescript"
```
