Scriptname Properties extends ScriptObject

ScriptObject Property AutoConstPropertyOfScriptObject Auto Const
ScriptObject Property AutoPropertyOfScriptObject Auto
; ScriptObject Property AutoReadOnlyPropertyOfScriptObject AutoReadOnly

ScriptObject variableOfScriptObject

; hey
; this is
; some kind comments
ScriptObject Property PropertyOfScriptObject
    {hey}
    ScriptObject Function Get()
        return variableOfScriptObject
    EndFunction

    Function Set(ScriptObject value)
        variableOfScriptObject = value
    EndFunction
EndProperty