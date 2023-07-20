<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Advanced Tutorial: Country Info Capsules</h1>
</p>

## Overview

This repo contains sample code for a tutorial that covers advanced features of the Bixby platform. See the tutorial [here](https://bixbydevelopers.com/dev/docs/sample-capsules/walkthroughs/tutorial)

The tutorial shows users how to create a Bixby capsule that can answer questions about world countries using a free remote service called [REST Countries](https://restcountries.com/), which provides country information through a JSON API.

The tutorial teaches the following key concepts:
- Fetch data from API calls in your actions
- Add continuations, flags, and routes to your Natural Language training
- Use complex macros and Expression Language constructions

To get started, download this repo. There are two capsules in this repo:
- ```capsule-sample-country-info-initial```: starter/initial capsule code
- ```capsule-sample-country-info-full```: fully functional capsule

You should then open either of the capsules in Bixby Studio. The suggested first capsule you open and the one the tutorial starts with is: ```capsule-sample-country-info-initial```

You can then launch the simulator and type:

```start```

The capsule will then prompt you for a country name, you can either type it in, speak it (using the microphone icon) or enter it into the simulators form field.

The capsule will then present you with information about the country. Alternatively you can try utterances which ask for a country directly e.g.:

```tell me about switzerland```

---

In the full capsule, you can do things like this:

```What is the population of France```

After the answer is given, try:

```What is the capital```

This will give you the capital of France. If you then ask:

```What about Portugal```

The capsule will give you the capital of Portugal. You could then ask:

```Tell me about Canada```

Which would give you full information about Canada.

This latter functionality used more advanced training including continuations, flags and routes and advanced views and usage of macros in views (using EL e.g. Bixby Expression Language)

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby Tutorials](https://bixbydevelopers.com/dev/docs/sample-capsules/videos/bixby-tutorials) - Video explanations for Bixby development

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* *[Bixby Developers Chat](https://open.spotify.com/show/3abrdQbOgpQBIbleWjTvci) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
