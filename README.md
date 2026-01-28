# NexSpring Software Website

## Running Locally

This site uses [Eleventy (11ty)](https://www.11ty.dev/) with WebC components.

### Prerequisites

**Deno** - A JavaScript/TypeScript runtime (alternative to Node.js).

**Install Deno:**
```bash
curl -fsSL https://deno.land/install.sh | sh
```

Or on macOS with Homebrew:
```bash
brew install deno
```

Verify installation:
```bash
deno --version
```

### Development Server
```bash
deno run -A npm:@11ty/eleventy --serve
```

Opens at `http://localhost:8080` with auto-reload.
