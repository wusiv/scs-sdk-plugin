NDSummary.OnToolTipsLoaded("File3:src/scs_telemetry.cpp",{12:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Name/Location of the Shared Memory</div></div>",14:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype14\" class=\"NDPrototype NoParameterForm\">scs_log_t game_log</div><div class=\"TTSummary\">Used to write to the game log</div></div>",18:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> log_line(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_log_type_t&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>* <span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PModifierQualifier first\">...</td><td></td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Used to write to the in game console log</div></div>",19:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype19\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> log_line(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>* <span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PModifierQualifier first\">...</td><td></td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Used to write to the in game console log as error (debugging)</div></div>",20:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> log_configs(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_telemetry_configuration_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">It print every config event that appears to the in game log careful, create a lot of logs so that fast parts are not readable anymore in the log window</div></div>",21:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype21\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> log_events(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_telemetry_gameplay_event_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">It print every gameplay event that appears to the in game log careful, create a lot of logs so that fast parts are not readable anymore in the log window</div></div>",22:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> set_trailer_values_zero(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">trailer_id&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">set every trailer value 0/empty string</div></div>",23:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SCSAPI_VOID telemetry_frame_start(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_event_t&nbsp;</td><td class=\"PName last\">UNUSED(event),</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span>* <span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">event_info,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">scs_context_t&nbsp;</td><td class=\"PName last\">UNUSED(context)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Register telemetry values</div></div>",24:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SCSAPI_VOID telemetry_pause(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_event_t&nbsp;</td><td class=\"PName last\">event,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span>* <span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">UNUSED(event_info),</td></tr><tr><td class=\"first\"></td><td class=\"PType\">scs_context_t&nbsp;</td><td class=\"PName last\">UNUSED(context)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">called if the game fires the event start/pause. Used to set the paused value</div></div>",25:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SCSAPI_VOID telemetry_configuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">scs_event_t&nbsp;</td><td class=\"PName last\">event,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span>* <span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">event_info,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">scs_context_t&nbsp;</td><td class=\"PName last\">UNUSED(context)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">called if the game fires the event configuration. Used to handle all the configuration values</div></div>"});