﻿using DarkId.Papyrus.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace DarkId.Papyrus.LanguageService
{
    public class Diagnostic
    {
        private readonly DiagnosticInfo _diagnosticInfo;

        public DiagnosticLevel Severity => _diagnosticInfo.Severity;
        public string Message => _diagnosticInfo.Message;
        public TextRange Range { get; }
        public Exception Exception => _diagnosticInfo.Exception;

        public Diagnostic(DiagnosticInfo info, TextRange range = default)
        {
            _diagnosticInfo = info;
            Range = range;
        }
    }
}