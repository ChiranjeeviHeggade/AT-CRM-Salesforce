package com.at.crm.salesforce.framework;

import java.util.HashMap;
import java.util.Map;

public class HeadersForAPI {
	
	private static final String contentType = "Content-Type";  

	public Map<String, String> getHeaders1() {
		Map<String, String> map = new HashMap<String, String>();
		map.put("Accept", "application/json;text/xml");
		map.put(contentType, "audio/wav; codec=audio/pcm; samplerate=16000");
		map.put("Expect", "100-continue");
		map.put("Ocp-Apim-Subscription-Key", "870bf44973ee40d7939ae13f07249a71");
		map.put("Host", "speech.platform.bing.com");
		return map;
	}

	public Map<String, String> getHeaders2() {
		Map<String, String> map = new HashMap<String, String>();
		map.put(contentType, "text/xml");
		return map;
	}

	public Map<String, String> getHeaders4() {
		Map<String, String> map = new HashMap<String, String>();
		map.put(contentType, "text/xml");
		map.put("SOAPAction", "https://www.w3schools.com/xml/CelsiusToFahrenheit");
		return map;
	}

	public Map<String, String> getHeaders3() {
		Map<String, String> map = new HashMap<String, String>();
		map.put(contentType, "application/json");
		return map;
	}

}