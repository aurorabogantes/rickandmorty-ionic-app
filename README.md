# Rick and Morty Character Explorer - An Ionic Angular Mobile Application

A cross-platform mobile application built with Ionic and Angular that allows users to explore characters from the Rick and Morty TV series. The app provides an interactive interface to browse character details and their associated episodes.

This application demonstrates the power of Ionic Framework for building hybrid mobile applications using web technologies. It leverages Angular's component architecture and routing capabilities to create a smooth, native-like user experience. The app integrates with the Rick and Morty API to fetch and display character information and episode details.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── app/                      # Application root directory
│   │   ├── home/                 # Home page module and components
│   │   └── services/            # API services for Rick and Morty data
│   ├── environments/            # Environment configuration files
│   └── theme/                   # Ionic theming and styling
├── angular.json                 # Angular CLI configuration
├── capacitor.config.ts          # Capacitor native runtime config
├── ionic.config.json            # Ionic framework configuration
└── package.json                 # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)
- For iOS development:
  - macOS
  - Xcode
- For Android development:
  - Android Studio
  - Java Development Kit (JDK)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rickandmortyApp

# Install dependencies
npm install

# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Add platforms
ionic capacitor add ios     # For iOS
ionic capacitor add android # For Android
```

### Quick Start

1. Start the development server:
```bash
ionic serve
```

2. Open your browser to `http://localhost:8100`

3. For mobile development:
```bash
# Build the application
ionic build

# Sync with native projects
ionic capacitor sync

# Open in native IDE
ionic capacitor open ios     # For iOS
ionic capacitor open android # For Android
```

### More Detailed Examples

1. Viewing Character List:
```typescript
// home.page.ts
import { RickandmortyapiService } from '../services/rickandmortyapi.service';

export class HomePage {
  characters: any[] = [];

  constructor(private apiService: RickandmortyapiService) {
    this.loadCharacters();
  }

  async loadCharacters() {
    this.characters = await this.apiService.getCharacters();
  }
}
```

2. Displaying Episode Details:
```html
<!-- home.page.html -->
<ion-list>
  <ion-item *ngFor="let episode of characterEpisodes">
    <ion-label>
      <h2>{{episode.name}}</h2>
      <p>Episode: {{episode.episode}}</p>
      <p>Air Date: {{episode.air_date}}</p>
    </ion-label>
  </ion-item>
</ion-list>
```

### Troubleshooting

1. Build Errors
- Issue: `Error: Cannot find module '@angular/compiler-cli'`
  - Solution: Run `npm install @angular/compiler-cli --save-dev`
  - Verify Angular version compatibility in package.json

2. Platform-specific Issues
- iOS Deployment:
  - Ensure Xcode Command Line Tools are installed
  - Run `xcode-select --install`
  - Check signing certificates in Xcode

- Android Deployment:
  - Verify ANDROID_HOME environment variable is set
  - Ensure Android SDK platforms and tools are installed
  - Run `ionic capacitor sync android` after making changes

## Data Flow
The application follows a simple data flow pattern for fetching and displaying Rick and Morty character information.

```ascii
[User Interface] <-> [Services Layer] <-> [Rick and Morty API]
     |                    |                       |
     v                    v                       v
[Character List] -> [Episode Details] -> [External Data]
```

Key component interactions:
1. Services layer handles API communication
2. Home page component manages character list display
3. Episode details are loaded on demand when a character is selected
4. UI components use Ionic's built-in components for native-like presentation
5. Data is cached where appropriate to minimize API calls
6. Error handling is implemented at service and component levels
7. State management is handled through component hierarchy